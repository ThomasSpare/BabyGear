from django.shortcuts import render
from .models import Membership, Subscription
from .serializers import MembershipSerializer
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.conf import settings
from profiles.models import UserAccount as User
from reviews.permissions import (AdminOrReadOnly, IsAdminOrStaffPermission, IsAuthorOrModerPermission, IsUserForSelfPermission)


class GetUsersSubscriptionPlanAPIView(APIView):
    authentication_classes = [AdminOrReadOnly, IsAdminOrStaffPermission]

    def get(self, request):
        user = request.user
        if user is None:
            return Response(
                {"error": "You are not logged in"},
                status=status.HTTP_401_UNAUTHORIZED,
            )
        membership = User.objects.get(user=user)
        serializer = MembershipSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)


class GetMembershipInfoAPIView(APIView):
    authentication_classes = [AdminOrReadOnly, IsAdminOrStaffPermission, IsAuthorOrModerPermission, IsUserForSelfPermission]

    def get(self, request):
        user = request.user
        if user is None:
            return Response(
                {"error": "You are not logged in"},
                status=status.HTTP_401_UNAUTHORIZED,
            )
        membership = Membership.objects.get_or_create(user=user)[0]
        return Response(status=status.HTTP_200_OK)
