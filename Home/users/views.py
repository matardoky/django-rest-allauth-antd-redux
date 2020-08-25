from django.shortcuts import render
from .serializers import CustomRegisterSerializer
from .models import User
from rest_auth.registration.views import RegisterView
from rest_framework import permissions
from rest_framework.generics import ListAPIView

class CustomRegisterView(RegisterView, ListAPIView): 
    serializer_class = CustomRegisterSerializer
    permission_classes = (permissions.IsAdminUser,)  

    def get_queryset(self):
        user = self.request.user
        return User.objects.filter(email= user.email)
