# Generated by Django 4.0.3 on 2022-05-24 12:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('homepage', '0003_alter_rating_andcomments_comment_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='rating_andcomments',
            name='time_cr',
            field=models.DateTimeField(auto_now_add=True, null=True, verbose_name='Время создания'),
        ),
    ]