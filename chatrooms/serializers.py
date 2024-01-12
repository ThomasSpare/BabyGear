# from dj_rest_auth.serializers import UserDetailsSerializer
# from dj_rest_auth.serializers import UserDetailsSerializer
from profiles.serializers import UserSerializer
from rest_framework import serializers
# from django.contrib.auth import get_user_model
from profile.models import UserAccount


class CurrentUserSerializer(UserSerializer):
    profile_id = serializers.ReadOnlyField(source='UserAccount.id')
    profile_image = serializers.ReadOnlyField(source='UserAccount.avatar.url')

    class Meta:
        model = UserAccount
        fields = UserSerializer.Meta.fields + (
            'profile_id', 'profile_image',
        )
        