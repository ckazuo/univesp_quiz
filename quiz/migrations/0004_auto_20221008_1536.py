# Generated by Django 3.1.1 on 2022-10-08 18:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0003_auto_20220512_1754'),
    ]

    operations = [
        migrations.AlterField(
            model_name='questionario',
            name='imagem',
            field=models.CharField(blank=True, max_length=200),
        ),
    ]
