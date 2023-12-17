from django.contrib import admin
from .models import Category, Review, Title
admin.site.register(Category)
admin.site.register(Review)
admin.site.register(Title)



class CategoryGenreAdmin(admin.ModelAdmin):
    list_display = (
        'slug',
        'Product Type'
    )
    search_fields = ('slug',)
    list_filter = ('slug',)
    empty_value_display = '-empty-'


class ReviewAdmin(admin.ModelAdmin):
    list_display = (
        'author',
        'productname',
        'review',
        'score',
        'pub_date'
    )
    search_fields = ('title',)
    list_filter = ('author', 'title')
    empty_value_display = '-empty-'


class TitleAdmin(admin.ModelAdmin):
    list_display = (
        'name_of_product',
        'year',
        'category'
    )
    search_fields = ('name',)
    list_filter = ('category',)
    empty_value_display = '-empty-'


