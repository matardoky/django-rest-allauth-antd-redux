from rest_framework.routers import DefaultRouter
from . import views
from django.urls import path, include

router = DefaultRouter()

urlpatterns = [
    path('', views.CustomRegisterView.as_view(), name="create-user"),
]