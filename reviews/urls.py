from django.urls import path
from .views import (ReviewViewSet, CategoryViewSet, TitleViewSet, ProductViewSet )


urlpatterns = [
    path("reviews", ReviewViewSet.as_view({'get': 'list'}), name="reviews"),
    path("categories", CategoryViewSet.as_view({'get': 'list'}), name="categories"),
    path("title", TitleViewSet.as_view({'get': 'list'}), name="title"),
    path("product", ProductViewSet.as_view({'get': 'list'}), name="product"),
]
