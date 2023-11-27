from django.contrib import admin
from .models import UserAccount


@admin.register(UserAccount)
class AdminUser(admin.ModelAdmin):
    list_display = (
        "id",
        "username",
        "password1",
        "email",
        "parent",
        "country",
        "first_name",
        "last_name",
        "is_staff",
        "is_superuser",
        "is_active",
        "date_joined",
        "avatar",
    )