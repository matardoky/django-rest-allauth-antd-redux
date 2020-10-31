from rest_framework import serializers
from api.models import Location

class LocationSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Location 
        fields = (
            'url',
            'name', 
            'address', 
        )
        read_only_fields = ('location',)