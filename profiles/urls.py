from django.urls import path
from profiles.views import ProfileList, RegisterView, LoginAPIView, LogoutAPIView
from subscription import views


urlpatterns = [    
    path("user", ProfileList.as_view(), name="user"),
    path("register", RegisterView.as_view(), name="register"),
    path("login", LoginAPIView.as_view(), name="login"),
    path("logout", LogoutAPIView.as_view(), name="logout"),
    path("membership", views.GetUsersSubscriptionPlanAPIView.as_view(), name="membership"),
]
