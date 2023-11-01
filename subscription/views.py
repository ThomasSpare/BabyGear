from django.shortcuts import render
from .models import Membership, Subscription
from .serializers import MembershipSerializer
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from authentication.authentication import JWTAuthentication
from django.conf import settings
User = settings.AUTH_USER_MODEL


class GetUsersSubscriptionPlanAPIView(APIView):
    authentication_classes = [JWTAuthentication]

    def get(self, request):
        user = request.user
        if user is None:
            return Response(
                {"error": "You are not logged in"},
                status=status.HTTP_401_UNAUTHORIZED,
            )
        membership = Membership.objects.get_or_create(user=user)[0]
        plan = membership.type
        serializer = MembershipSerializer(plan)
        return Response(serializer.data, status=status.HTTP_200_OK)


class GetMembershipInfoAPIView(APIView):
    authentication_classes = [JWTAuthentication]

    def get(self, request):
        user = request.user
        if user is None:
            return Response(
                {"error": "You are not logged in"},
                status=status.HTTP_401_UNAUTHORIZED,
            )
        membership = Membership.objects.get_or_create(user=user)[0]
        return Response(status=status.HTTP_200_OK)
