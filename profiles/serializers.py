from django.contrib.auth.password_validation import validate_password
from django.core import exceptions
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import UserAccount
from django.conf import settings
from pdb import set_trace
from .models import UserAccount as User
User = settings.AUTH_USER_MODEL


class ProfileSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = [
            "avatar",
            "first_name",
            "last_name",
            "email",
            "birth_date",
            "country",
            "password1",
        ]


class UserCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('__all__')

    def validate(self, data):
        user = User(**data)
        password = data.get("password1")

        try:
            validate_password(password, user)
        except exceptions.ValidationError as e:
            serializer_errors = serializers.as_serializer_error(e)
            raise exceptions.ValidationError(
                {"password1": serializer_errors["non_field_errors"]}
            )
        return data

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data["username1"],
            password=validated_data["password1"],
        )
        return user


class UserSerializer(ModelSerializer):
    """User Serializer"""

    class Meta:
        model = User
        fields = [
            "id",
            "username1",
            "first_name",
            "last_name",
            "email",
            "country",
            "birth_date",
            "password1",
            "avatar",
            "parent",
        ]
        extra_kwargs = {
            "password1": {"write_only": True},
            "avatar": {"required": False},
        }

    def create(self, validated_data):
        password1 = validated_data.pop("password1", None)
        instance = self.Meta.model(**validated_data)
        if password1 is not None:
            instance.set_password(password1)
        instance.save()
        return instance
