from django.db import models
from users.models import User

class Etablissement(models.Model):
    name = models.CharField(max_length=100)
    def __str__(self):
        return self.name 
        
class Specialite(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self): 
        return self.name

class Region(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return self.name

class Deps(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self): 
        return self.name
    
class Ville(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self): 
        return self.name

class LieuConsult(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    region = models.ForeignKey(Region, on_delete=models.CASCADE)
    deps = models.ForeignKey(Deps, on_delete=models.CASCADE)
    ville = models.ForeignKey(Ville, on_delete=models.CASCADE)
    code = models.CharField(max_length=50)
    name1 = models.CharField(max_length=50, blank=True, null=True)
    name2 = models.ForeignKey(Etablissement, on_delete=models.CASCADE)

    def __str__(self): 
        return self.name2
    
class Contact(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    lieu = models.ForeignKey(LieuConsult, on_delete=models.CASCADE, related_name='contacts', blank=True, null=True)
    name = models.CharField(max_length=50)
    phone = models.CharField(max_length=50)
    fax = models.CharField(max_length=50, blank=True, null=True)

class Horaire(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    lieu = models.ForeignKey(LieuConsult, on_delete=models.CASCADE, related_name='horaires', blank=True, null=True)
    jour = models.CharField(max_length=50)
    debut = models.TimeField()
    fin = models.TimeField()

class BasePatient(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)

    def __str__(self): 
        return self.name

class FichePatient(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    base = models.ForeignKey(BasePatient, on_delete=models.CASCADE)
    lastName = models.CharField(max_length=50)
    firstName = models.CharField(max_length=50)
    email = models.EmailField()
    phone1 = models.CharField(max_length=50)
    phone2 = models.CharField(max_length=50, blank=True, null=True)
    birthday = models.DateField()
    adresse = models.CharField(max_length=100)
    code = models.CharField(max_length=50)
    ville = models.CharField(max_length=50)
    remarques = models.CharField(max_length=200)
    notes = models.CharField(max_length=200)

class Ressources(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)

class Agenda(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    specialite = models.CharField(max_length=50)
    lieu = models.ForeignKey(LieuConsult, on_delete=models.CASCADE)
    base = models.ForeignKey(BasePatient, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    color = models.CharField(max_length=10, null=True, blank=True)
    bgColor = models.CharField(max_length=10, null=True, blank=True)
    borderColor = models.CharField(max_length=10, null=True, blank=True)
    dragBgColor = models.CharField(max_length=10, null=True, blank=True)

    def __str__(self): 
        return self.name

class MotifConsult(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    specialite = models.CharField(max_length=50)
    categorie = models.CharField(max_length=50)
    agenda = models.ForeignKey(Agenda, on_delete=models.CASCADE)
    duree = models.TimeField()
    delaiMin = models.TimeField()
    delaiMax = models.TimeField()
    reservable = models.BooleanField(default=True, null=True, blank=True)
    color = models.CharField(max_length=10, null=True, blank=True)
    bgColor = models.CharField(max_length=10, null=True, blank=True)
    borderColor = models.CharField(max_length=10, null=True, blank=True)
    dragBgColor = models.CharField(max_length=10, null=True, blank=True)

    def __str__(self):
        return self.name
    
class AgendaSharing(models.Model): 
    pass

class Invitation(models.Model): 
    pass

