from django.urls import path
from .views import (ReviewViewSet, )


urlpatterns = [
    path("reviews", ReviewViewSet.as_view({'get': 'list'}), name="reviews"),
]
