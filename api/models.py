from django.contrib.gis.db import models
from users.models import User

class Location(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    location = models.PointField()
    create_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name 
    
class Specialite(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return self.name

class Base(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    def __str__(self):
        return self.name

class Agenda(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    specialite = models.ForeignKey(Specialite, on_delete=models.CASCADE)
    location = models.ForeignKey(Location, on_delete=models.CASCADE)
    base = models.ForeignKey(Base, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    color = models.CharField(max_length=10, null=True, blank=True)
    bgColor = models.CharField(max_length=10, null=True, blank=True)
    borderColor = models.CharField(max_length=10, null=True, blank=True)
    dragBgColor = models.CharField(max_length=10, null=True, blank=True)
    
    def __str__(self):
        return self.name


