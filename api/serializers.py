from rest_framework import serializers
from api.models import Location, Base, Agenda, Specialite


class StringSerializer(serializers.StringRelatedField):
    def to_internal_value(self, value):
        return value

class LocationSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Location 
        fields = (
            'url',
            'name', 
            'address', 
        )
        read_only_fields = ('location',)

class SpecialiteSerializer(serializers.ModelSerializer):
    class Meta:
        model=Specialite
        fields = ('url', 'name',)
    
class BaseSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Base
        fields =('url','name',)

class AgendaSerializer(serializers.ModelSerializer): 
    specialite = StringSerializer(many=False)
    location = StringSerializer(many=False)
    base = StringSerializer(many=False)
    class Meta:
        model = Agenda
        fields = (
            'url',
            'name',
            'specialite', 
            'location',
            'base',
        )
    