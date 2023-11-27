from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import permissions, status
from rest_framework.permissions import IsAuthenticated
from .serializers import (ProfileSerializer, UserCreateSerializer,
                          UserSerializer)
from django.conf import settings
from profiles.models import UserAccount as User


class ProfileList(APIView):
    """
    List all profiles
    No Create view (post method), as profile creation handled by django signals
    """
    def get(self, request):
        profiles = User.objects.all()
        serializer = ProfileSerializer(
            profiles, many=True, context={'request': request}
        )
        return Response(serializer.data)


class RegisterView(APIView):
    def post(self, request):
        data = request.data

        if data["password1"] != data["password2"]:
            return Response(
                {"error": "Passwords do not match"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        serializer = UserCreateSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)


class LoginAPIView(APIView):
    def post(self, request):
        profiles = User.objects.all()
        email = request.data["email"]
        password = request.data["password"]
        serializer = ProfileSerializer(
            profiles, many=True, context={'email': email, 'password': password}
        )

        if email is None or password is None:
            return Response(
                {"error": "Please provide both email and password"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        user = User.objects.filter(email=email).first()

        if user is None:
            return Response(
                {"error": "Invalid email or password"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        response = Response()

        response.status_code = status.HTTP_200_OK

        return Response(user, status=status.HTTP_202_ACCEPTED)


class LogoutAPIView(APIView):
    def post(self, request):

        response = Response()
        response.delete_cookie("refresh_token")
        response.delete_cookie("access_token")
        response.data = {"success": True, "message": "Logged out"}
        response.status_code = status.HTTP_200_OK

        return response



