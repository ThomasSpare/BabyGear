from django.contrib.auth.password_validation import password_validation
from django.core import exceptions
from rest_framework import serializers
from django.contrib.auth import get_user_model
User = get_user_model()


class UserCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email', 'password')

    def validate(self, data):
        user = User(**data)
        password = data.get('password')

        try:
            password_validation(password, user)
        except exceptions.ValidationError as e:

    def create(self, validated_data):
        User = User.objects.create_user(
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            evalmail=validated_data['email'],
            password=validated_data['password'],    
        )

        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('first_name', 'last_name', 'email')

