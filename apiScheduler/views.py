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
    AgendaSerializer,
    MotifConsulSerializer,
    EtablissementSerializer,
    RegionSerializer,
    DepsSerializer,
    VilleSerializer,
    SpecialiteSerializer
)
from . import models

class UserMixins(object):
    permission_classes = (IsAuthenticated,)
    filter_backends = (IsUserFilterBackend,)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class EtablissementView(APIView): 
    permission_classes = (IsAuthenticated,)
    def get(self, request, *args, **kwargs):
        queryset = models.Etablissement.objects.all()
        serializer = EtablissementSerializer(queryset, many=True)
        return Response(serializer.data, status=HTTP_200_OK)

class RegionView(APIView):
    permission_classes=(IsAuthenticated,)
    def get(self, request, *args, **kwargs): 
        queryset = models.Region.objects.all()
        serializer = RegionSerializer(queryset, many=True)
        return Response(serializer.data, status=HTTP_200_OK)

class DepsView(APIView):
    permission_classes=(IsAuthenticated,)
    def get(self, request, *args, **kwargs): 
        queryset = models.Deps.objects.all()
        serializer = DepsSerializer(queryset, many=True)
        return Response(serializer.data, status=HTTP_200_OK)

class VilleView(APIView):
    permission_classes=(IsAuthenticated,)
    def get(self, request, *args, **kwargs): 
        queryset = models.Ville.objects.all()
        serializer = VilleSerializer(queryset, many=True)
        return Response(serializer.data, status=HTTP_200_OK)
        
class SpecialiteView(APIView): 
    permission_classes = (IsAuthenticated,)
    def get(self, request, *args, **kwargs):
        queryset = models.Specialite.objects.all()
        serializer = SpecialiteSerializer(queryset, many=True)
        return Response(serializer.data, status=HTTP_200_OK)

class RegionView(APIView): 
    permission_classes = (IsAuthenticated,)
    def get(self, request, *args, **kwargs):
        queryset = models.Region.objects.all()
        serializer = RegionSerializer(queryset, many=True)
        return Response(serializer.data, status=HTTP_200_OK)

class DepsView(APIView): 
    permission_classes = (IsAuthenticated,)
    def get(self, request, *args, **kwargs):
        queryset = models.Deps.objects.all()
        serializer = DepsSerializer(queryset, many=True)
        return Response(serializer.data, status=HTTP_200_OK)

class VilleView(APIView): 
    permission_classes = (IsAuthenticated,)
    def get(self, request, *args, **kwargs):
        queryset = models.Ville.objects.all()
        serializer = VilleSerializer(queryset, many=True)
        return Response(serializer.data, status=HTTP_200_OK)

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

class AgendaViewSet(UserMixins, viewsets.ModelViewSet):
    queryset = models.Agenda.objects.all()
    serializer_class = AgendaSerializer
    permission_classes = (IsAdminUser, )

class MotifConsultViewSet(UserMixins, viewsets.ModelViewSet):
    queryset = models.MotifConsult.objects.all()
    serializer_class = MotifConsulSerializer
    permission_classes = (IsAdminUser, )