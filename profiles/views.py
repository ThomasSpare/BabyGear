from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import permissions, status
from django.contrib.auth import get_user_model
from authentication.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from .serializers import UserCreateSerializer, UserSerializer
from django.contrib.auth.models import User


class RegisterView(APIView):
    authentication_classes = [IsAuthenticated]

    def post(self, request):
        data = request.data
        serializer = UserCreateSerializer(data=data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        user = serializer.create(serializer.validated_data)
        user = UserSerializer(user)
        return Response(user.data, status=status.HTTP_201_CREATED)


class RetrieveUserView(APIView):
    authentication_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        user = UserSerializer(user)
        return Response(user.data, status=status.HTTP_200_OK)
