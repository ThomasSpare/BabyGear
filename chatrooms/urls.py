from django.contrib import admin
from django.urls import path, re_path, include
from .views import root_route, logout_route
from dj_rest_auth.jwt_auth import get_refresh_view



urlpatterns = [
    path('', root_route),
    # path(r'^rest-auth/facebook/$', FacebookLogin.as_view(), name='fb_login'),
    path('admin/', admin.site.urls),
    path('products/', include('reviews.urls')),
    path('profiles/', include('profiles.urls')),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path('dj-rest-auth/logout/', include('dj_rest_auth.urls')),
    re_path(r'^dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')),
    path('', include('followers.urls')),
    path('', include('reviews.urls')),
]
