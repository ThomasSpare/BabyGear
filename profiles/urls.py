from django.urls import path
from .views import RegisterView, RetrieveUserView


urlpatterns = [
    path('profiles/register', RegisterView.as_view(), name='register'),
    path('profiles/me', RetrieveUserView.as_view(), name='me'),
]
