from django.urls import path, include
from .views import LocationView
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()

router.register('locations', views.LocationView)
router.register('specialites', views.SpecialiteView)
router.register('bases', views.BaseView)
router.register('agendas', views.AgendaView)
router.register('owner', views.OwnerView)

urlpatterns = [
    path('', include(router.urls)),
    path('register', views.RegisterView.as_view())
]