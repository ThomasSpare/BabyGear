from django.contrib import admin
from django.urls import path, re_path, include
from authentication.views import VerifyTokenAPIView, RefreshTokenAPIView
from django.views.generic import TemplateView


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),
    path('api/token/refresh', RefreshTokenAPIView.as_view(), name="refresh"),
    path('api/token/verify', VerifyTokenAPIView.as_view(), name="verify_token"),
    path('api/profiles/', include('profiles.urls')),
    path('api/api-auth/', include('rest_framework.urls')),
]

handler404 = TemplateView.as_view(template_name='index.html')
