# Generated by Django 4.0.5 on 2023-11-27 17:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0007_useraccount_username2'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='useraccount',
            options={},
        ),
        migrations.AlterModelTable(
            name='useraccount',
            table='Users',
        ),
    ]
