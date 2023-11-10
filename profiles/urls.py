from django.urls import path
from profiles.views import ProfileList, RegisterView, LoginAPIView
from subscription import views


urlpatterns = [    
    path("user", ProfileList.as_view(), name="user"),
    path("register", RegisterView.as_view(), name="register"),
    path("login", LoginAPIView.as_view(), name="login"),
    path("membership", views.GetUsersSubscriptionPlanAPIView.as_view(), name="membership"),
]
