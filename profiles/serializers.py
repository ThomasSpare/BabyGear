from django.contrib.auth.password_validation import validate_password
from django.core import exceptions
from rest_framework import serializers
from rest_framework.serializers import ModelSerializer
from .models import UserAccount
from django.conf import settings
from pdb import set_trace
from django.contrib.auth import get_user_model
User = get_user_model()
User = settings.AUTH_USER_MODEL


class ProfileSerializer(serializers.ModelSerializer):
   class Meta:
       model = UserAccount
       fields = [
           'id', 'avatar', 'username', 'first_name', 'last_name', 'email', 
           'birth_date', 'country', 'password', 'date_joined', 'parent'
       ]
       read_only_fields = [
           'id', 'avatar', 'username', 'first_name', 'last_name', 'email', 
           'birth_date', 'country', 'password', 'date_joined', 'parent'
       ]

       def get_following_id(self, obj):
        user = self.context['request'].user
        if user.is_authenticated:
            following = Follower.objects.filter(
                owner=user, followed=obj.owner
            ).first()
            # print(following)
            return following.id if following else None
        return None

class Meta:
    model = UserAccount
    fields = [
        'id', 'date_joined', 'birth_date', 'username',
        'country', 'avatar', 'following_id',
        'posts_count', 'followers_count', 'following_count',
    ]


class UserCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserAccount
        fields = ('__all__')

        extra_kwargs = {
            "password": {"write_only": True},
        }

    def validate(self, data):
        user = User(**data)
        password = data.get("password")

        try:
            validate_password(password, user)
        except exceptions.ValidationError as e:
            serializer_errors = serializers.as_serializer_error(e)
            raise exceptions.ValidationError(
                {"password": serializer_errors["non_field_errors"]}
            )
        return data

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data["username"],
            password=validated_data["password"],
        )
        return user


class UserSerializer(ModelSerializer):
    """User Serializer"""

    class Meta:
        model = UserAccount
        fields = [
            "id",
            "username",
            "first_name",
            "last_name",
            "email",
            "country",
            "birth_date",
            "password",
            "avatar",
            "parent",
        ]
        extra_kwargs = {
            "password": {"write_only": True},
            "avatar": {"required": False},
        }

    def create(self, validated_data):
        password = validated_data.pop("password", None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance
