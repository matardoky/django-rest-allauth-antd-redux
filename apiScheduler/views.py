from django.shortcuts import render
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST, HTTP_204_NO_CONTENT
from rest_framework import viewsets
from .filters import IsUserFilterBackend

from .serializers import (
    LieuConsultSerializer, 
    ContactSerializer,
    HoraireSerializer, 
    BaseSerializer, 
    FicheSerializer, 
    RessourceSerializer,
    
)
from . import models

class UserMixins(object):
    permission_classes = (IsAuthenticated,)
    filter_backends = (IsUserFilterBackend,)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class LieuConsultViewSet(UserMixins, viewsets.ModelViewSet): 
    queryset = models.LieuConsult.objects.all()
    serializer_class = LieuConsultSerializer
    permission_classes = (IsAdminUser,)

class ContactViewSet(UserMixins, viewsets.ModelViewSet):
    queryset = models.Contact.objects.all()
    serializer_class = ContactSerializer
    permission_classes = (IsAdminUser,)

class HoraireViewSet(UserMixins, viewsets.ModelViewSet):
    queryset = models.Horaire.objects.all()
    serializer_class = HoraireSerializer
    permission_classes = (IsAdminUser,)

class BaseViewSet(UserMixins, viewsets.ModelViewSet): 
    queryset = models.BasePatient.objects.all()
    serializer_class = BaseSerializer
    permission_classes = (IsAdminUser,)

class FicheViewSet(UserMixins, viewsets.ModelViewSet): 
    queryset = models.FichePatient.objects.all()
    serializer_class = FicheSerializer
    permission_classes = (IsAdminUser,)

class RessourceViewSet(UserMixins, viewsets.ModelViewSet):
    queryset = models.Ressources.objects.all()
    serializer_class = RessourceSerializer
    permission_classes = (IsAdminUser, )
