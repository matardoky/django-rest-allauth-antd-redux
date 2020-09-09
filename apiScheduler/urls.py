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
router.register('agenda', views.AgendaViewSet)
router.register('motif-de-consultation', views.MotifConsultViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('etablissements', views.EtablissementView.as_view(), name='etablissements'),
    path('specialites', views.SpecialiteView.as_view(), name='specialites'),
    path('regions', views.RegionView.as_view(), name='regions'),
    path('departements', views.DepsView.as_view(), name='departements'),
    path('villes', views.EtablissementView.as_view(), name='villes'),
]