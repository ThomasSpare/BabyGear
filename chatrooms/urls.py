from django.contrib import admin
from django.urls import path, re_path, include
from authentication.views import VerifyTokenAPIView, RefreshTokenAPIView
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView
from .views import root_route


urlpatterns = [
    path('', root_route),
    path('api/token/', TokenObtainPairView.as_view(), name="token"),
    path('api/token/refresh/', RefreshTokenAPIView.as_view(), name="refresh"),
    path('api/token/verify/', VerifyTokenAPIView.as_view(), name="verify_token"),
    path('api/profiles/', include('profiles.urls')),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
]
