# Generated by Django 3.2.12 on 2022-10-19 07:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('estates', '0005_auto_20221019_1639'),
    ]

    operations = [
        migrations.RenameField(
            model_name='database',
            old_name='gunmulyongdo',
            new_name='a',
        ),
        migrations.RenameField(
            model_name='database',
            old_name='lastbozeong',
            new_name='b',
        ),
        migrations.RenameField(
            model_name='database',
            old_name='gunchukyear',
            new_name='c',
        ),
        migrations.RenameField(
            model_name='database',
            old_name='lastimdaeru',
            new_name='d',
        ),
        migrations.RenameField(
            model_name='database',
            old_name='zibunjuso',
            new_name='e',
        ),
    ]
