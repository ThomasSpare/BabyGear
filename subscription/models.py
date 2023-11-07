from django.db import models
from django.conf import settings
from profiles.models import UserAccount as User


class Subscription(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    parent = models.BooleanField(default=False)
    to_be_parent = models.BooleanField(default=False)
    can_make_posts = models.BooleanField(default=False)

    def __str__(self):
        return self.name
    
    def save(self, *args, **kwargs):
        name = (User.first_name + " ", User.last_name)

        super().save(*args, **kwargs)


class Membership(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name="membership"
    )
    is_active = models.BooleanField(default=True)
    type = models.ForeignKey(
        Subscription,
        on_delete=models.CASCADE,
        related_name="memberships",
    )
    opened_at = models.DateTimeField(auto_now_add=True)
    renewed_at = models.DateTimeField(auto_now=True)
    expires_at = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.user.email
