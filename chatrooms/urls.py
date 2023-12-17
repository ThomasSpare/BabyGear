from django.contrib import admin
from django.urls import path, re_path, include
from .views import root_route, logout_route


urlpatterns = [
    path('', root_route),
    path('admin/', admin.site.urls),
    path('products/', include('reviews.urls')),
    path('profiles/', include('profiles.urls')),
    path('dj-rest-auth/logout/', logout_route),
    path('dj-rest-auth/', include('dj_rest_auth.urls')),
    path(
        'dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')
    ),
    path('', include('followers.urls')),
]
