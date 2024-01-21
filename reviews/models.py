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
        """
        Model for the CreateReviewForm that lets users
        write and post photos of reviewed products
        """
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
        score = models.IntegerField(
        null=True,
        blank=True,
        validators=[
            MaxValueValidator(10, '10'),
            MinValueValidator(1, '1')
        ],
    )
        slug = models.SlugField(max_length=200, unique=True, blank=True)


        class Meta:
            verbose_name = "Product Name"
            verbose_name_plural = "Product Names"

            def __str__(self):
                return self.name_of_product


class Review(models.Model):
    """
    Represents a review for a product.

    Attributes:
        author (User): The author of the review.
        name_of_product (str): The name of the product being reviewed.
        title (Title): The title associated with the review.
        review (str): The content of the review.
        score (int): The score given to the product (between 1 and 10).
        image (ImageField): An optional image associated with the review.
        pub_date (DateTimeField): The publication date of the review.

    Methods:
        __str__(): Returns a string representation of the review.
        title_upper(): Returns the uppercase version of the review's title.
    """
    author = models.ForeignKey(
        User, on_delete=models.CASCADE,
        related_name='author',
    )
    name_of_product = models.CharField(
        default=None, 
        null=True,
        max_length=200,
        verbose_name='name_of_product'
    )
    title = models.ForeignKey(Title, max_length=40, default=None, null=True, on_delete=models.CASCADE, related_name='reviews')
    review = models.TextField(default=None, null=True)
    score = models.IntegerField(
        null=True,
        validators=[
            MaxValueValidator(10, '10'),
            MinValueValidator(1, '1')
        ],
    )
    image = models.ImageField(
        upload_to='',
        blank=True,
        null=True,
        verbose_name='Image'
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
