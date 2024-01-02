from rest_framework.views import APIView
from django.db.models import Count
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework import permissions, status
from .permissions import IsOwnerOrReadOnly
from rest_framework.permissions import IsAuthenticated
from .serializers import (ProfileSerializer, UserCreateSerializer,
                          UserSerializer)
from django.conf import settings
from profiles.models import UserAccount as User
from rest_framework import viewsets, filters, generics
from django.contrib.auth import authenticate, login
from django.contrib.auth import get_user_model
from chatrooms.settings import (
    JWT_AUTH_COOKIE, JWT_AUTH_REFRESH_COOKIE, JWT_AUTH_SAMESITE,
    JWT_AUTH_SECURE,
)


class ProfileList(APIView):
    """
    List all profiles Only GET Allowed
    """
    def get(self, request, *args, **kwargs):
        profiles = User.objects.all()
        serializer = ProfileSerializer(profiles, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')
        user = get_object_or_404(User, username=username)
        if not user.check_password(password):
            return Response({"error": "Invalid username or password"}, status=status.HTTP_400_BAD_REQUEST)
        return Response({"message": "Login successful"}, status=status.HTTP_200_OK)


class ProfileDetail(generics.RetrieveUpdateAPIView):
    """
    Retrieve or update a profile if you're the owner.
    """
    permission_classes = [IsOwnerOrReadOnly]
    queryset = User.objects.annotate(
        posts_count=Count('author', distinct=True),
        followers_count=Count('author', distinct=True),
        following_count=Count('author', distinct=True)
    ).order_by('-date_joined')
    serializer_class = ProfileSerializer


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
        username = request.data.get('username')
        password = request.data.get("password")

        if not username or not password:
            return Response(
                {"error": "Please provide both Username and Password"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        user = authenticate(request, username=username, password=password)

        if user is None:
            return Response(
                {"error": "Invalid username or password"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        login(request, user)
        serializer = ProfileSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)


class LogoutAPIView(APIView):
    def post(self, request):

        response = Response()
        response.set_cookie(
        key=JWT_AUTH_COOKIE,
        value='',
        httponly=True,
        expires='Thu, 01 Jan 1970 00:00:00 GMT',
        max_age=0,
        samesite=JWT_AUTH_SAMESITE,
        secure=JWT_AUTH_SECURE,
    )
        response.set_cookie(
        key=JWT_AUTH_REFRESH_COOKIE,
        value='',
        httponly=True,
        expires='Thu, 01 Jan 1970 00:00:00 GMT',
        max_age=0,
        samesite=JWT_AUTH_SAMESITE,
        secure=JWT_AUTH_SECURE,
    )
        response.data = {"success": True, "message": "Logged out"}
        response.status_code = status.HTTP_200_OK


