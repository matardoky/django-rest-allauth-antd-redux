from rest_framework import serializers, permissions
from . import models

class LieuConsultSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    class Meta:
        model = models.LieuConsul
        fields = ('id', 'region', 'dpts', 'ville', 'code',  'name1', 'name2')

class ContactSerializer(serializers.ModelSerializer): 
    id = serializers.ReadOnlyField()
    class Meta: 
        model = models.Contacts
        fields =('id', 'name', 'phone', 'fax')