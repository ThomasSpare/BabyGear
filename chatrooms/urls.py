from django.contrib import admin
from django.urls import path, re_path, include
from authentication.views import (
    RefreshTokenAPIView,
    ForgotPasswordAPIView,
    ResetPasswordAPIView,
    VerifyTokenAPIView,
    ChangePasswordAPIView,
)
from .views import root_route


urlpatterns = [
    path('', root_route),
    path('api/token/refresh/', RefreshTokenAPIView.as_view()),
    path('api/token/verify/', VerifyTokenAPIView.as_view()),
    path('api/profiles/', include('profiles.urls')),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
]