from django.contrib.auth.password_validation import validate_password
from django.core import exceptions
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import UserAccount
from django.conf import settings
from pdb import set_trace
from .models import UserAccount as User


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
        ]
