from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView
from models.staff import Location 
from serializers.staffSerializers import LocationSerializer

class LocationView(ListCreateAPIView):
    queryset = Location.objects.all()
    serializer_class =s  LocationSerializer

