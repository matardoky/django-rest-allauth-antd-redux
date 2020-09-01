from rest_framework import serializers, permissions
from . import models

class LieuConsultSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = models.LieuConsult
        fields = ('id', 'region', 'deps', 'ville', 'code',  'name1', 'name2')

class ContactSerializer(serializers.ModelSerializer): 
    id = serializers.ReadOnlyField()
    class Meta: 
        model = models.Contact
        fields =('id', 'name', 'phone', 'fax')

class HoraireSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = models.Horaire
        fields = ('id', 'jour', 'debut', 'fin')

class BaseSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta: 
        model = models.BasePatient
        fields = ('id', 'name')

class FicheSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta: 
        model = models.FichePatient
        fields = ('id', 'base', 'lastName', 'firstName', 'email', 'phone1', 'phone2', 'birthday', 'adresse', 'ville', 'remarques', 'notes')

class RessourceSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = models.Ressources
        fields = ('id', 'name')
