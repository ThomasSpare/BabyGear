from django.urls import path
from .views import ProfileList
from authentication.views import (
    LogoutAPIView,
    LoginAPIView,
    RegisterView
)
from subscription.views import GetUsersSubscriptionPlanAPIView, GetMembershipInfoAPIView


urlpatterns = [
    path("register", RegisterView.as_view(), name="register"),
    path("login", LoginAPIView.as_view(), name="login"),
    path("user", GetUsersSubscriptionPlanAPIView.as_view(), name="membership"),
    path("logout", LogoutAPIView.as_view(), name="logout"),
]
