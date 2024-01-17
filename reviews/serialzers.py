from rest_framework import serializers
from rest_framework.validators import UniqueTogetherValidator
from reviews.models import Category, Review, Title, ProductType
from profiles.models import UserAccount as User
from .utils import CurrentTitleDefault


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        exclude = ("id",)


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductType
        exclude = ("id",)


class TitleSerializer(serializers.ModelSerializer):
    product_type = serializers.SlugRelatedField(
        queryset=Category.objects.all(), slug_field="slug", many=True
    )
    name_of_product = serializers.SlugRelatedField(
        queryset=Title.objects.all(), slug_field="name_of_product"
    )

    class Meta:
        model = Title
        fields = (
            "id",
            "name_of_product",
            "release_year",
            "product_type",
            "description",
            "category",
            "score",
            "image",
        )


class ReviewCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = ("title", "author", "score", "pub_date")


class ReviewSerializer(serializers.ModelSerializer):
    title = TitleSerializer(read_only=True)
    author = serializers.SlugRelatedField(
        default=serializers.CurrentUserDefault(), read_only=True, slug_field="author"
    )
    productname = serializers.HiddenField(default=CurrentTitleDefault())

    class Meta:
        model = Review
        fields = ("productname", "title", "author", "score", "pub_date")
        validators = [
            UniqueTogetherValidator(
                queryset=Review.objects.all(), fields=("author", "pub_date")
            )
        ]


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("first_name", "last_name", "email", "country", "parent")

    def validate(self, data):
        if data.get("email") == (None):
            raise serializers.ValidationError("Email does not exist!")
        return data


class ReadTitleSerializer(serializers.ModelSerializer):
    score = serializers.IntegerField(read_only=True)
    product_type = ProductSerializer(read_only=True, many=True)
    category = CategorySerializer(read_only=True)

    class Meta:
        model = Title
        fields = (
            "id",
            "name_of_product",
            "release_year",
            "product_type",
            "description",
            "category",
            "score",
            "image",
        )


class ReviewSerializer(serializers.ModelSerializer):
    title = serializers.CharField(read_only=True, source='title_upper')
    author = serializers.SlugRelatedField(
        default=serializers.CurrentUserDefault(), read_only=True, slug_field="author"
    )
    productname = serializers.HiddenField(default=CurrentTitleDefault())

    class Meta:
        model = Review
        fields = ("productname", "title", "author", "score", "pub_date")
        validators = [
            UniqueTogetherValidator(
                queryset=Review.objects.all(), fields=("author", "pub_date")
            )
        ]


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("first_name", "last_name", "email", "country", "parent")

    def validate(self, data):
        if data.get("email") == (None):
            raise serializers.ValidationError("Email do not exist !")
        return data
