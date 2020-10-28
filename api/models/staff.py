from django.contrib.gis.db import models

class Location(models.Model): 
    name = models.CharField(max_length=100)
    adress = models.CharField(max_length=100)
    location = models.PointField(null=True, blank=True)
    create_at = models.DateTimeField(auto_now=True, null=True, blank=True)
    modified_at = models.DateTimeField(auto_now=True, null=True, blank=True)

    def __str__(self):
        return self.name 