from django.urls import path
from .views import ProfileList
from authentication.views import (
    LogoutAPIView,
    LoginAPIView,
    UserAPIView,
    RegisterView
)


urlpatterns = [
    path("register/", RegisterView.as_view(), name="register"),
    path("login/", LoginAPIView.as_view(), name="login"),
    path("user/", UserAPIView.as_view(), name="user"),
    path("logout/", LogoutAPIView.as_view(), name="logout"),
]
