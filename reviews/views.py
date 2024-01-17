from django.db.models import Avg
from django.shortcuts import render
from rest_framework import serializers
from django.shortcuts import get_object_or_404
from rest_framework import filters, permissions, status, viewsets
from django_filters.rest_framework import DjangoFilterBackend
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.viewsets import ViewSet
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework import permissions
from rest_framework import filters
from rest_framework import generics
from rest_framework import viewsets
from rest_framework import status
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend

from .models import Category, Review, Title, ProductType
from profiles.models import UserAccount as User
from .mixins import CreateListDestroyViewSet, viewsets
from .filters import TitleFilter
from .serialzers import CategorySerializer, ReviewSerializer, TitleSerializer, ProductSerializer, ReadTitleSerializer
from django import forms
from .permissions import (AdminOrReadOnly, IsAdminOrStaffPermission,
                          IsAuthorOrModerPermission, IsUserForSelfPermission)


class CategoryViewSet(CreateListDestroyViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ('product_name',)
    lookup_field ='slug'
    permission_classes = (AdminOrReadOnly,)


class ProductViewSet(CreateListDestroyViewSet):
    queryset = ProductType.objects.all()
    serializer_class = ProductSerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ('product_type',)
    lookup_field = 'slug'
    permission_classes = (AdminOrReadOnly,)


class CreateReview(generics.ListCreateAPIView):
    queryset = Title.objects.all()
    serializer_class = TitleSerializer

    def perform_create(self, serializer):
        print(self.request.data)
        name_of_product = self.request.data.get('name_of_product')
        name_of_product = get_object_or_404(Title, slug=name_of_product)
        serializer.save(author=self.request.user, name_of_product=name_of_product)

    def get_queryset(self):
        title_str = self.kwargs.get('title')
        title = get_object_or_404(Title)
        return Title.objects.filter(title=title)


class TitleViewSet(viewsets.ModelViewSet):
    queryset = Title.objects.annotate(rating=Avg('reviews__score')).all()
    queryset = Title.objects.all()
    serializer_class = TitleSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_class = TitleFilter
    permission_classes = (AdminOrReadOnly,)
    lookup_field = 'slug'

    @property
    def slug(self, request, *args, **kwargs):
        self.object = self.get_object()
        return self.object.title_slug

    def get_serializer_class(self):
        if self.action in ['slug', 'create', 'update', 'partial_update']:
            return TitleSerializer
        return ReadTitleSerializer
