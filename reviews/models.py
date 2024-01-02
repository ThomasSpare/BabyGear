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
        verbose_name='Feature'
    )

    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.product_type


class ProductType(models.Model):
    product_type = models.CharField(
        max_length=30,
        blank=True,
        verbose_name='Product Type'
    )
    name = models.CharField(
        max_length=200,
        blank=True,
        verbose_name='name'
    )
    colors = models.CharField(
        max_length=20,
        null=True,
        blank=True,
        verbose_name='Color'
    )
    price_range = models.CharField(
        max_length=100,
        blank=True,
        verbose_name='Product Price Range'
    )
    slug = models.SlugField(
        unique=True,
        verbose_name='Category'
    )

    class Meta:
        verbose_name = "Product"
        verbose_name_plural = "Products"

    def __str__(self):
        return self.product_type


class Title(models.Model):
        name_of_product = models.CharField(
        max_length=200,
        verbose_name='name_of_product'
    )
        release_year = models.SmallIntegerField(
        validators=[year_validator],
        verbose_name='Release year'
    )
        description = models.TextField(
        null=True,
        blank=True,
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
            verbose_name = "Product Name"
            verbose_name_plural = "Product Names"

            def __str__(self):
                return self.name_of_product


class Review(models.Model):
    author = models.ForeignKey(
        User, on_delete=models.CASCADE,
        related_name='author',
    )
    productname = models.ForeignKey(
        Title, on_delete=models.CASCADE,
        related_name='product_name',
    )
    title = models.ForeignKey(Title, max_length=40, default=None, null=True, on_delete=models.CASCADE, related_name='reviews')
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
        verbose_name='Pub date'
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

    @property
    def title_upper(self):
       return self.title.upper()
