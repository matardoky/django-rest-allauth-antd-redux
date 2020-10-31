from django.urls import path, include
from .views import LocationView
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()

router.register('location', views.LocationView)

urlpatterns = [
    path('', include(router.urls)),
]