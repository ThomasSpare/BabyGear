from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.response import Response
from rest_framework import permissions, status
from django.contrib.auth import get_user_model
from authentication.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from .serializers import UserCreateSerializer, ProfileSerializer
from authentication.serializers import UserSerializer
from .models import UserAccount
from django.conf import settings
User = settings.AUTH_USER_MODEL


class RegisterView(APIView):
    authentication_classes = [JWTAuthentication]

    def post(self, request):
        data = request.data
        serializer = UserCreateSerializer(data=data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        user = serializer.create(serializer.validated_data)
        user = UserSerializer(user)
        return Response(user.data, status=status.HTTP_201_CREATED)


class ProfileList(APIView):
    """
    List all profiles
    No Create view (post method), as profile creation handled by django signals
    """
    def get(self, request):
        profiles = UserAccount.objects.all()
        serializer = ProfileSerializer(
            profiles, many=True, context={'request': request}
        )
        return Response(serializer.data)


class RetrieveUserView(APIView):
    authentication_classes = [JWTAuthentication]

    def get(self, request):
        user = request.user
        user = UserSerializer(user)
        return Response(user.data, status=status.HTTP_200_OK)
