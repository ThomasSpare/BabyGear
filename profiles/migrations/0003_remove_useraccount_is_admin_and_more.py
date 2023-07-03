# Generated by Django 4.2.2 on 2023-07-03 08:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0002_useraccount_is_admin_alter_useraccount_is_superuser'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='useraccount',
            name='is_admin',
        ),
        migrations.AlterField(
            model_name='useraccount',
            name='is_superuser',
            field=models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status'),
        ),
    ]
