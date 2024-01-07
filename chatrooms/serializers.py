# from dj_rest_auth.serializers import UserDetailsSerializer
from profiles.serializers import ProfileSerializer
from rest_framework import serializers


class CurrentUserSerializer(ProfileSerializer):
    profile_id = serializers.ReadOnlyField(source='UserAccount.id')
    profile_image = serializers.ReadOnlyField(source='UserAccount.avatar.url')

    class Meta(ProfileSerializer.Meta):
        fields = list(ProfileSerializer.Meta.fields) + ['profile_id', 'profile_image']
        