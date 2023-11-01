import datetime
import random
import string
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserSerializer, UserCreateSerializer
from profiles.models import UserAccount as User
from rest_framework import permissions, status
from .authentication import (
    JWTAuthentication,
    create_access_token,
    create_refresh_token,
    decode_access_token,
    decode_refresh_token,
)
from .models import ForgotPasswordToken
from django.conf import settings
from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.utils.html import strip_tags
user = settings.AUTH_USER_MODEL


class RegisterView(APIView):
    def post(self, request):
        data = request.data

        serializer = UserCreateSerializer(data=data)

        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        user = serializer.create(serializer.validated_data)
        user = UserSerializer(user)

        return Response(user.data, status=status.HTTP_201_CREATED)


class RetrieveUserView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        user = request.user
        user = UserSerializer(user)

        return Response(user.data, status=status.HTTP_200_OK)


class LoginAPIView(APIView):
    def post(self, request):
        email = request.data["email"]
        password = request.data["password"]

        if email is None or password is None:
            return Response(
                {"error": "Please provide both email and password"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # user = User.objects.filter(email=email).first()

        if user is None:
            return Response(
                {"error": "Invalid email or password"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        response = Response()

        response.status_code = status.HTTP_200_OK

        return response


class LogoutAPIView(APIView):
    def post(self, request):

        access_token = request.COOKIES.get("access_token")
        refresh_token = request.COOKIES.get("refresh_token")

        if not refresh_token:
            return Response(
                {"error": "No refresh token"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        if not access_token:
            return Response(
                {"error": "No access token"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        id = decode_refresh_token(refresh_token)

        if not id:
            return Response(
                {"error": "Invalid refresh token"},
                status=status.HTTP_401_UNAUTHORIZED,
            )

        response = Response()
        response.delete_cookie("refresh_token")
        response.delete_cookie("access_token")
        response.data = {"success": True, "message": "Logged out"}
        response.status_code = status.HTTP_200_OK

        return response


class VerifyTokenAPIView(APIView):
    authentication_classes = [JWTAuthentication]

    def get(self, request):
        return Response({"success": True})


class UserAPIView(APIView):

    authentication_classes = [JWTAuthentication]

    def get(self, request):
        user = request.user
        if user is None:
            return Response(
                {"error": "You are not logged in"},
                status=status.HTTP_400_BAD_REQUEST,
            )
        serializer = UserSerializer(user)
        data = serializer.data
        if user.avatar:
            data["avatar"] = user.avatar.url
        return Response(data, status=status.HTTP_200_OK)


class RefreshTokenAPIView(APIView):
    def post(self, request):
        refresh_token = request.COOKIES.get("refresh_token")

        if not refresh_token:
            return Response(
                {"error": "No refresh token"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        id = decode_refresh_token(refresh_token)

        if not id:
            return Response(
                {"error": "Invalid refresh token"},
                status=status.HTTP_401_UNAUTHORIZED,
            )

        if not User.objects.filter(id=id).exists():
            return Response(
                {"error": "Invalid refresh token"},
                status=status.HTTP_401_UNAUTHORIZED,
            )

        access_token = create_access_token(id)

        response = Response()

        response.set_cookie(
            key="access_token",
            value=access_token,
            httponly=True,
            expires=datetime.datetime.utcnow() +
            datetime.timedelta(seconds=600),
        )

        response.status_code = status.HTTP_200_OK

        return response

