from django.contrib import admin
from .models import (
    Etablissement, 
    Specialite, 
    Region,
    Deps, 
    Ville, 
    LieuConsult
)
# Register your models here.


admin.site.register(Etablissement)
admin.site.register(Specialite)
admin.site.register(Region)
admin.site.register(Deps)
admin.site.register(Ville)
admin.site.register(LieuConsult)
