from django.contrib.auth.password_validation import validate_password
from django.core import exceptions
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import UserAccount
from django.conf import settings
from pdb import set_trace
User = settings.AUTH_USER_MODEL


class ProfileSerializer(serializers.ModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')
    is_owner = serializers.SerializerMethodField()

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    class Meta:
        model = UserAccount
        fields = [
            'first_name',
            'last_name',
            'email',
            'password',
        ]

