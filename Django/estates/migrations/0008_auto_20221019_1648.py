# Generated by Django 3.2.12 on 2022-10-19 07:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('estates', '0007_rename_c_database_zibunjuso'),
    ]

    operations = [
        migrations.RenameField(
            model_name='database',
            old_name='zibunjuso',
            new_name='gunchukyear',
        ),
        migrations.RenameField(
            model_name='database',
            old_name='a',
            new_name='gunmulyongdo',
        ),
        migrations.RenameField(
            model_name='database',
            old_name='b',
            new_name='lastbozeong',
        ),
        migrations.RenameField(
            model_name='database',
            old_name='d',
            new_name='lastimdaeru',
        ),
    ]
