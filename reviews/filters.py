import django_filters
from reviews.models import Title


class TitleFilter(django_filters.FilterSet):
    name_of_product = django_filters.CharFilter(field_name='name_of_product__slug')
    release_year = django_filters.CharFilter(field_name='release_year__slug')
    category = django_filters.CharFilter(
        field_name='category',
        lookup_expr='icontains'
    )
    year = django_filters.NumberFilter(field_name='release_year')

    class Meta:
        model = Title
        fields = ('name_of_product', 'category', 'release_year')
