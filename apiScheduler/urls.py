from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('lieu-consult', views.LieuConsultViewSet)
router.register('contact', views.ContactViewSet)
router.register('horaire', views.HoraireViewSet)
router.register('base', views.BaseViewSet)
router.register('fiche-patient', views.FicheViewSet)
router.register('ressource', views.RessourceViewSet)
urlpatterns = [
    path('', include(router.urls)),
]