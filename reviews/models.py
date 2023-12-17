from django.contrib.auth import get_user_model
from profiles.models import UserAccount as User
from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

from .validators import year_validator


class Category(models.Model):
    product_type = models.CharField(
        max_length=256,
    )
    slug = models.SlugField(
        unique=True,
        verbose_name='Product Type'
    )

    class Meta:
        verbose_name = "Product Type"
        verbose_name_plural = "Product Types"

    def __str__(self):
        return self.product_type


class Title(models.Model):
        name_of_product = models.CharField(
        max_length=200,
        verbose_name='Product Name'
    )
        release_year = models.SmallIntegerField(
        validators=[year_validator],
        verbose_name='Release year'
    )
        description = models.TextField(
        blank=True,
        null=True,
        verbose_name='Description'
    )
        category = models.ForeignKey(
        Category,
        on_delete=models.SET_NULL,
        blank=True,
        null=True,
    )
        slug = models.SlugField(max_length=200, unique=True, blank=True)


        class Meta:
            verbose_name = "Description"
            verbose_name_plural = "Descriptions"

            def __str__(self):
                return self.name_of_product


class Review(models.Model):
    author = models.ForeignKey(
        User, on_delete=models.CASCADE,
        related_name='reviews',
    )
    productname = models.ForeignKey(
        Title, on_delete=models.CASCADE,
        related_name='reviews',
    )
    title = models.TextField(default=None, null=True)
    review = models.TextField(default=None, null=True)
    score = models.IntegerField(
        validators=[
            MaxValueValidator(10, '10'),
            MinValueValidator(1, '1')
        ],
    )
    pub_date = models.DateTimeField(
        auto_now_add=True,
        db_index=True,
        verbose_name='Date added'
    )

    class Meta:
        ordering = ('-pub_date',)
        constraints = [
            models.UniqueConstraint(
                fields=['author', 'title'],
                name='unique_author_review'
            )
        ]

    def __str__(self):
        return self.review[:15]
