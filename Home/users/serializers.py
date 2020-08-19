from rest_framework import serializers 
from rest_framework.authtoken.models import Token 
from allauth.account.adapter import get_adapter 
from rest_auth.registration.serializers import RegisterSerializer

from .models import User

class UserSerializer(serializers.ModelSerializer): 
    class Meta: 
        model = User
        fields = ('__all__')


class CustomRegisterSerializer(RegisterSerializer): 

    first_name = serializers.CharField(max_length=50)
    last_name = serializers.CharField(max_length=50)
    is_staff = serializers.BooleanField()

    def get_cleaned_data(self):
        return {
            'username': self.validated_data.get('username', ''),
            'email': self.validated_data.get('email', ''),
            'password1': self.validated_data.get('password1', ''),
            'password2': self.validated_data.get('password2', ''),
            'first_name': self.validated_data.get('first_name', ''),
            'last_name': self.validated_data.get('last_name',  ''),
            'is_staff': self.validated_data.get('is_staff', ''),
        }

    def save(self,request): 
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        user.is_staff = self.cleaned_data.get('is_staff')
        user.save()
        adapter.save_user(request, user, self)
        return user


class TokenSerializer(serializers.ModelSerializer):
    user_type = serializers.SerializerMethodField()
    class Meta: 
        model = Token 
        fields = ('user', 'key', 'user_type')
    
    def get_user_type(self, obj):
        serializer_data = UserSerializer(
            obj.user
        ).data

        first_name = serializer_data.get('first_name')
        last_name = serializer_data.get('last_name')
        is_staff = serializer_data.get('is_staff')
        
        return {
            'first_name' : first_name, 
            'last_name' : last_name,
            'is_staff' : is_staff
        }
