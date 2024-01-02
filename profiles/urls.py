from django.urls import path
from profiles.views import ProfileList, ProfileDetail, RegisterView, LoginAPIView, LogoutAPIView


urlpatterns = [    
    path("user", ProfileList.as_view(), name="user"),
    path("register", RegisterView.as_view(), name="register"),
    path("login", LoginAPIView.as_view(), name="login"),
    path("logout", LogoutAPIView.as_view(), name="logout"),
    # path("membership", views.GetUsersSubscriptionPlanAPIView.as_view(), name="membership"),
    path('profiles', ProfileList.as_view(), name="profiles"),
    path('profiles/<username>', ProfileDetail.as_view(), name="profilepage"),
]
