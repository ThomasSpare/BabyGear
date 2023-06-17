from django.urls import re_path
from chatapp.consumers import TextRoomConsumer


websocket_urlpatterns = [
    re_path(r'^ws/(?P<room_name>[^/]+)/$', TextRoomConsumer.as_asgi()),
]