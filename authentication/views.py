from .authentication import (
    JWTAuthentication,
    create_access_token,
    create_refresh_token,
    decode_access_token,
    decode_refresh_token,
)
import datetime
from rest_framework.views import APIView
from rest_framework.response import Response
from profiles.models import UserAccount
from rest_framework import status
from django.contrib.auth import get_user_model
User = get_user_model()


# Create your views here.
class LoginAPIView(APIView):
    def post(self, request):
        email = request.data["email"]
        password = request.data["password"]

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

        if not user.check_password(password):
            return Response(
                {"error": "Invalid email or password"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        request_access_token = request.COOKIES.get("access_token")
        request_refresh_token = request.COOKIES.get("refresh_token")

        if request_access_token or request_refresh_token:
            return Response(
                {"error": "You are already logged in"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        access_token = create_access_token(user.id)
        refresh_token = create_refresh_token(user.id)

        response = Response()

        response.set_cookie(
            key="refresh_token",
            value=refresh_token,
            httponly=True,
            expires=datetime.datetime.utcnow() + datetime.timedelta(days=7),
        )

        response.set_cookie(
            key="access_token",
            value=access_token,
            httponly=True,
            expires=datetime.datetime.utcnow() +
            datetime.timedelta(seconds=600),
        )

        response.status_code = status.HTTP_200_OK

        return response
