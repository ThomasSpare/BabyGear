# Generated by Django 4.2.2 on 2023-10-10 16:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='useraccount',
            options={},
        ),
        migrations.RemoveField(
            model_name='useraccount',
            name='date_joined',
        ),
        migrations.RemoveField(
            model_name='useraccount',
            name='is_active',
        ),
        migrations.RemoveField(
            model_name='useraccount',
            name='is_staff',
        ),
    ]
