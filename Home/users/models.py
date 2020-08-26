from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    birthday = models.DateField(blank=True, null=True)
    titre = models.CharField(blank=True, null=True, max_length=7)
    phone_number = models.CharField(blank=True, null=True, max_length=50)
    def __str__(self): 
        return self.email





