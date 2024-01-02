from django.db.models import Avg
from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework import filters, permissions, status, viewsets
from django_filters.rest_framework import DjangoFilterBackend
from reviews.models import Category, Review, Title, ProductType
from profiles.models import UserAccount as User
from .mixins import CreateListDestroyViewSet
from .filters import TitleFilter
from .serialzers import CategorySerializer, ReviewSerializer, TitleSerializer, ProductSerializer, ReadTitleSerializer
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


class ReviewViewSet(viewsets.ModelViewSet):
    serializer_class = ReviewSerializer
    permission_classes = [
    permissions.IsAuthenticatedOrReadOnly,
    IsAuthorOrModerPermission]

    def perform_create(self, serializer):
        title = self.kwargs.get('title')
        name_of_product = get_object_or_404(Title, id=id)
        serializer.save(author=self.request.user, name_of_product=name_of_product)

    def get_queryset(self):
        title_str = self.kwargs.get('title')
        title = get_object_or_404(Title, name=title_str)
        return Review.objects.filter(title=title)


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
