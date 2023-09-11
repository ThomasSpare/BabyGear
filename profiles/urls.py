from django.urls import path
from .views import RegisterView, RetrieveUserView, ProfileList


urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('me/', RetrieveUserView.as_view(), name='me'),
    path('', ProfileList.as_view()),

]
