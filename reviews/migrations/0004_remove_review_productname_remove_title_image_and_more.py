# Generated by Django 4.0.5 on 2024-01-18 17:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reviews', '0003_title_score'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='review',
            name='productname',
        ),
        migrations.RemoveField(
            model_name='title',
            name='image',
        ),
        migrations.AddField(
            model_name='review',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='titles/', verbose_name='Image'),
        ),
        migrations.AddField(
            model_name='review',
            name='name_of_product',
            field=models.CharField(default=None, max_length=200, null=True, verbose_name='name_of_product'),
        ),
    ]
