# Generated by Django 3.2.12 on 2022-10-25 10:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('estates', '0002_jachibubjung'),
    ]

    operations = [
        migrations.CreateModel(
            name='Jachibubjung_xy',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('bubjung', models.CharField(max_length=50)),
                ('position_x', models.FloatField()),
                ('position_y', models.FloatField()),
            ],
        ),
    ]
