from rest_framework.serializers import ModelSerializer
from django.conf import settings
User = settings.AUTH_USER_MODEL


class UserSerializer(ModelSerializer):
    """User Serializer"""
    class Meta:
        model = User
        fields = ['owner', 'is_owner', 'email', 'username', 'birth_date', 'first_name', 'last_name',
                  'country', 'learning', 'tutor_sessions']
        extra_kwargs = {
            "password": {"write_only": True},
            "avatar": {"required": False},
            "tutor_sessions": {"required": False},
        }

    def create(self, validated_data):
        password = validated_data.pop("password", None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
