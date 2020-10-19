from rest_framework import serializers, permissions
from . import models

class EtablissementSerializer(serializers.ModelSerializer):
    class Meta: 
        model = models.Etablissement
        fields = ('__all__')

class RegionSerializer(serializers.ModelSerializer): 
    class Meta:
        model = models.Region
        fields =('__all__')

class DepsSerializer(serializers.ModelSerializer):
    class Meta: 
        model = models.Deps
        fields = ('__all__')

class VilleSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = models.Ville
        fields =('__all__')

class SpecialiteSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = models.Specialite
        fields = ('__all__')


class ContactSerializer(serializers.ModelSerializer): 
    id = serializers.ReadOnlyField()
    class Meta: 
        model = models.Contact
        fields =('id','url', 'name', 'phone', 'fax')

class HoraireSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    
    def __init__(self, *args, **kwargs):
        many = kwargs.pop('many', True)
        super(HoraireSerializer, self).__init__(many=many, *args, **kwargs)
        
    class Meta:
        model = models.Horaire
        fields = ('id', 'url', 'day', 'start', 'end')

class LieuConsultSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = models.LieuConsult
        fields = ('id', 'url', 'region', 'deps', 'ville', 'rue', 'code',  'name1', 'name2')
    
    def to_representation(self, instance): 
        context = super(LieuConsultSerializer, self).to_representation(instance)
        context['region'] = instance.region.name
        context['deps'] = instance.deps.name
        context['ville'] = instance.ville.name
        context['name2'] = instance.name2.name
        return context

class BaseSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta: 
        model = models.BasePatient
        fields = ('id', 'url', 'name')

class FicheSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    def get_fields(self, *args, **kwargs):
        fields = super(FicheSerializer, self).get_fields(*args, **kwargs)
        request = self.context['request']
        fields['base'].queryset = fields['base'].queryset.filter(user=request.user)
        return fields
    class Meta: 
        model = models.FichePatient
        fields = ('id', 'url', 'base', 'lastName', 'firstName', 'email', 'phone1', 'phone2', 'birthday', 'adresse', 'ville', 'remarques', 'notes')

class RessourceSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = models.Ressources
        fields = ('id', 'name')

class AgendaSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()

    def get_fields(self, *args, **kwargs): 
        fields = super(AgendaSerializer, self).get_fields(*args, **kwargs)
        request = self.context['request']
        fields['lieu'].queryset = fields['lieu'].queryset.filter(user=request.user)
        fields['base'].queryset = fields['base'].queryset.filter(user=request.user)
        return fields
    class Meta: 
        model = models.Agenda
        fields = ('id', 'specialite','lieu', 'base', 'name' )

class MotifConsulSerializer(serializers.ModelSerializer): 
    id = serializers.ReadOnlyField()
    def get_fields(self, *args, **kwargs): 
        fields = super(MotifConsulSerializer, self).get_fields(*args, **kwargs)
        request = self.context['request']
        fields['agenda'].queryset = fields['agenda'].queryset.filter(user=request.user)
        return fields
    class Meta: 
        model = models.MotifConsult
        fields = ('id', 'name', 'specialite', 'categorie', 'agenda', 'duree', 'delaiMin', 'delaiMax', 'reservable', 'color', 'bgColor', 'borderColor', 'dragBgColor')
