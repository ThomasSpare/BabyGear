from django.urls import path
from .views import RetrieveUserView, ProfileList
from authentication.views import (
    LogoutAPIView,
    RegisterAPIView,
    LoginAPIView,
    UserAPIView,
    RefreshTokenAPIView,
    ForgotPasswordAPIView,
    ResetPasswordAPIView,
    VerifyTokenAPIView,
    ChangePasswordAPIView,
)


urlpatterns = [
    path("register/", RegisterAPIView.as_view(), name="register"),
    path("login/", LoginAPIView.as_view(), name="login"),
    path("user/", UserAPIView.as_view(), name="user"),
    path("refresh/", RefreshTokenAPIView.as_view(), name="refresh"),
    path("logout/", LogoutAPIView.as_view(), name="logout"),
]
