from django.shortcuts import render
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST, HTTP_204_NO_CONTENT

from .filters import IsUserFilterBackend

from .serializers import LieuConsultSerializer
from . import models

class UserMixins(object):
    permission_classes = (IsAdminUser, )
    filter_backends = (IsUserFilterBackend,)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class LieuConsultView(APIView, UserMixins):
    permission_classes = (IsAdminUser, )
    filter_backends = (IsUserFilterBackend,)

    def get(self, request, *args, **kwargs):
        queryset = models.LieuConsul.objects.all()
        serializer = LieuConsultSerializer(queryset, many=True)
        return Response(serializer.data, status=HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        serializer = LieuConsultSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_201_CREATED)
        return Response(serializer.errors, status= HTTP_400_BAD_REQUEST)
    
    def put(self, pk, request, *args, **kwargs):
        lieuConsult = models.LieuConsul.objects.get(pk=pk)
        serializer = LieuConsultSerializer(lieuConsult, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=HTTP_200_OK)
        return Response(serializer.errors, status=HTTP_400_BAD_REQUEST)
        
    def delete(self, pk, request, *args, **kwargs):
        lieuConsult = models.LieuConsul.objects.get(pk=pk)
        lieuConsult.delete()
        return Response(status=HTTP_204_NO_CONTENT)

    

