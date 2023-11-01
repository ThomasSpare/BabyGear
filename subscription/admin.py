from django.contrib import admin
from .models import Membership, Subscription


@admin.register(Subscription)
class SubscriptionPlanAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "parent",
        "to_be_parent",
        "can_make_posts",
        "description",
    )


@admin.register(Membership)
class MembershipAdmin(admin.ModelAdmin):
    list_display = (
        "user",
    )
