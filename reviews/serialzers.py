from rest_framework import serializers
from rest_framework.validators import UniqueTogetherValidator
from reviews.models import Category, Review, Title
from profiles.models import UserAccount as User
from .utils import CurrentTitleDefault


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        exclude = ('id',)


class TitleSerializer(serializers.ModelSerializer):
    product_type = serializers.SlugRelatedField(
        queryset=Category.objects.all(), slug_field='slug', many=True
    )
    name_of_product = serializers.SlugRelatedField(
        queryset=Title.objects.all(), slug_field='slug'
    )

    class Meta:
        model = Title
        fields = ('id', 'name_of_product', 'release_year', 'description',
                  'category')


class ReviewSerializer(serializers.ModelSerializer):
    author = serializers.SlugRelatedField(
        default=serializers.CurrentUserDefault(),
        read_only=True,
        slug_field='username'
    )
    productname = serializers.HiddenField(
        default=CurrentTitleDefault())

    class Meta:
        fields = ('id', 'review', 'title', 'author', 'score', 'pub_date')
        model = Review
        validators = [
            UniqueTogetherValidator(
                queryset=Review.objects.all(),
                fields=('author', 'pub_date')
            )
        ]


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = (
            'first_name', 'last_name', 'email', 'country', 'parent'
        )

    def validate(self, data):
        if data.get('email') == (None):
            raise serializers.ValidationError(
                'Email do not exist !')
        return data
