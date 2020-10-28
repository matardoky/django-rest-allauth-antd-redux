from rest_framework import serializers
from models.staff import Location

class LocationSerializer(serializers.ModelSerializer): 
    class Meta:
        model = Location 
        fields = (
            'name', 
            'adress', 
        )
        read_only_fields = ('location',)