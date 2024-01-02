from django.db import models
from profiles.models import UserAccount as User
from reviews.models import Review


class Comment(models.Model):
    """
    Comment model, related to User and Post
    """
    author = models.ForeignKey(Review, on_delete=models.CASCADE, related_name="creator")
    title = models.ForeignKey(Review, on_delete=models.CASCADE, related_name="about")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    content = models.TextField()

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.content
