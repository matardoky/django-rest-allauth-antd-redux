from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from api.models import Location, Agenda, Specialite, Base
from .filters import IsUserFilterBackend
from api.serializers import (
LocationSerializer, BaseSerializer, AgendaSerializer, SpecialiteSerializer,
)
from users.models import User
from users.serializers import CustomRegisterSerializer, UserSerializer
import geocoder 
from rest_auth.registration.views import RegisterView

class OwnerView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (IsAdminUser,)

class UserMixins(object):
    permission_classes = (IsAuthenticated,)
    filter_backends = (IsUserFilterBackend,)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    
class LocationView(viewsets.ModelViewSet):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
    permission_classes = (IsAuthenticated,)
    filter_backends = (IsUserFilterBackend,)

    def perform_create(self, serializer): 
        address = serializer.initial_data['address']
        g = geocoder.osm(address)
        longitude = g.x
        latitude = g.y
        point = 'POINT(' + str(longitude) + ' ' + str(latitude) + ')'
        serializer.save(location=point, user=self.request.user)

class SpecialiteView(viewsets.ModelViewSet):
    queryset = Specialite.objects.all()
    serializer_class = SpecialiteSerializer

class BaseView(UserMixins, viewsets.ModelViewSet):
    queryset = Base.objects.all()
    serializer_class = BaseSerializer

class AgendaView(UserMixins, viewsets.ModelViewSet):
    queryset = Agenda.objects.all()    
    serializer_class = AgendaSerializer