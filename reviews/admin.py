from django.contrib import admin
from .models import Category, Review, Title, ProductType
admin.site.register(Category)
admin.site.register(Review)
admin.site.register(Title)
admin.site.register(ProductType)



class CategoryAdmin(admin.ModelAdmin):
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
        'title',
        'name_of_product',
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


class ProductTypeAdmin(admin.ModelAdmin):
    list_display = (
        'product_type', 'name',
        'price_range', 'colors', 'slug' 
    )
    search_fields = ('product_type',)
    list_filter = ('product_type',)
    empty_value_display = '-empty-'


