from django.db.models import Avg
from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework import filters, permissions, status, viewsets
from django_filters.rest_framework import DjangoFilterBackend
from reviews.models import Category, Review, Title
from profiles.models import UserAccount as User
from .mixins import CreateListDestroyViewSet
from .filters import TitleFilter
from .serialzers import CategorySerializer, ReviewSerializer, TitleSerializer
from .permissions import (AdminOrReadOnly, IsAdminOrStaffPermission,
                          IsAuthorOrModerPermission, IsUserForSelfPermission)


class CategoryViewSet(CreateListDestroyViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    filter_backends = (filters.SearchFilter,)
    search_fields = ('product_name',)
    lookup_field = 'slug'
    permission_classes = (AdminOrReadOnly,)


class ReviewViewSet(viewsets.ModelViewSet):
    serializer_class = ReviewSerializer
    permission_classes = [
        permissions.IsAuthenticatedOrReadOnly,
        IsAuthorOrModerPermission]

    def perform_create(self, serializer):
        title_id = self.kwargs.get('title_id')
        productname = get_object_or_404(Title, id=title_id)
        serializer.save(author=self.request.user, productname=productname)

    def get_queryset(self):
        title_id = self.kwargs.get('title_id')
        productname = get_object_or_404(Title, id=title_id)
        return productname.reviews.all()


class TitleViewSet(viewsets.ModelViewSet):
    queryset = Title.objects.annotate(rating=Avg('reviews__score')).all()
    serializer_class = TitleSerializer
    filter_backends = (DjangoFilterBackend,)
    filterset_class = TitleFilter
    permission_classes = (AdminOrReadOnly,)

    def get_serializer_class(self):
        if self.action in ['create', 'update', 'partial_update']:
            return TitleSerializer
        return ReadTitleSerializer
