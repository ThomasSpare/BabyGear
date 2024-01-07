from django.urls import path
from profiles.views import ProfileList, ProfileDetail, RegisterView, LoginAPIView, LogoutAPIView



urlpatterns = [    
    path("user", ProfileList.as_view(), name="user"),
    path("register", RegisterView.as_view(), name="register"),
    path("login", LoginAPIView.as_view(), name="login"),
    # path("logout/<int:pk>", LogoutAPIView.as_view(), name="logout"),  
    # Go through the LogoutAPIview something is wrong
    # The frontend logout form now leads to profiles/logout/(AND THE CURRENTUSER id here )
    # path("membership", views.GetUsersSubscriptionPlanAPIView.as_view(), name="membership"),
    path('profiles/<int:pk>', ProfileList.as_view(), name="profiles"),
    path('profiles', ProfileDetail.as_view(), name="profilepage"),
]
