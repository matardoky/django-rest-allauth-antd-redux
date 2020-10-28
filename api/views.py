from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView
from .models import Location
from .serializers import LocationSerializer
import geocoder 
class LocationView(ListCreateAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer

    def perform_create(self, serializer): 
        adress = serializer.initial_data['adress']
        g = geocoder.google(adress)
        latitude = g.latlng[0]
        longitude = g.latlng[1]
        point = 'Point('+str(longitude) + ' ' + str(latitude) + ')'
        serializer.save(location=point)

