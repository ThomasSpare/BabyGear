from django.urls import path
from rest_framework.viewsets import ViewSet
from .views import (CreateReview, CategoryViewSet, TitleViewSet, ProductViewSet )


urlpatterns = [
    path("reviews/", CreateReview.as_view(), name="reviews"),
    path("categories", CategoryViewSet.as_view({'get': 'list'}), name="categories"),
    path("title", TitleViewSet.as_view({'get': 'list'}), name="title"),
    path("product", ProductViewSet.as_view({'get': 'list'}), name="product"),
]
