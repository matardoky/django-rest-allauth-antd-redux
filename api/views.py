from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView
from rest_framework import viewsets
from api.models import Location
from api.serializers import LocationSerializer
import geocoder 


class LocationView(viewsets.ModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer

    def perform_create(self, serializer): 
        address = serializer.initial_data['address']
        g = geocoder.osm(address)
        longitude = g.x
        latitude = g.y
        point = 'POINT(' + str(longitude) + ' ' + str(latitude) + ')'
        serializer.save(location=point)

    def save(self, *args, **kwargs):
        if not self.pk:
            super(Location, self).save(*args, **kwargs)

