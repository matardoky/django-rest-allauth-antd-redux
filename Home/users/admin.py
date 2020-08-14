from django.contrib import admin
from django import forms
from django.contrib.auth.models import Group
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from django.contrib.auth.forms import UserCreationForm, UserChangeForm

from users.models import User

class CustomUserCreationForm(UserCreationForm):

    class Meta(UserCreationForm.Meta): 
        model = User
        fields = (
            'first_name', 
            'last_name', 
            'email',
            'birthday', 
            'titre', 
            'phone_number', 
            'is_staff'
        )


class CustomUserChangeForm(UserChangeForm): 

    class Meta(UserChangeForm): 
        model = User
        fields = (
            'first_name', 
            'last_name', 
            'password', 
            'birthday',
            'titre', 
            'phone_number', 
            'is_staff'
        )
  

class UserAdmin(BaseUserAdmin): 
    fieldsets = (
        (None, {
            "fields":("email", "password")
        }),

        ("Information Personnelle", {
            "fields":("first_name", "last_name", "birthday", "phone_number")
        }),

        ("Permissions", {
            "fields":(
                "is_staff",
                "is_active",
                "is_superuser",
                "groups",
                "user_permissions"
            )
        }),

        ("Important dates", {
            "fields":("last_login", "date_joined")
        })

    )

    add_fieldsets = (
        (
            None, {
                "classes":("wide",),
                "fields":("first_name", "last_name", "email","phone_number","password1", "password2"),
            },
        ),
    )

    list_display = ('first_name', 'last_name', 'email', 'phone_number')
    ordering = ("email",)
    search_fields=("email","first_name", "last_name")


    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = User



admin.site.register(User, UserAdmin)
admin.site.unregister(Group)

