from django.contrib import admin
from django.urls import path, re_path, include
from authentication.views import VerifyTokenAPIView, RefreshTokenAPIView
from .views import root_route


urlpatterns = [
    path('', root_route),
    path('admin/', admin.site.urls),
    path('api/token/refresh', RefreshTokenAPIView.as_view(), name="refresh"),
    path('api/token/verify', VerifyTokenAPIView.as_view(), name="verify_token"),
    path('api/profiles/', include('profiles.urls')),
    path('api-auth/', include('rest_framework.urls')),
]
