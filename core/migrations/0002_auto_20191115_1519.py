# Generated by Django 2.2.7 on 2019-11-15 18:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='quemsomos',
            options={'verbose_name': 'Quem Somos'},
        ),
        migrations.AlterField(
            model_name='quemsomos',
            name='descricao',
            field=models.TextField(help_text="Descrição de 'Quem somos' ", max_length=400, verbose_name='Descrição'),
        ),
        migrations.AlterField(
            model_name='quemsomos',
            name='imagem',
            field=models.ImageField(blank=True, help_text="Imagem que ficará na seção 'Quem Somos' ", null=True, upload_to='quemSomos/', verbose_name='Imagem'),
        ),
        migrations.AlterField(
            model_name='quemsomos',
            name='subtitulo',
            field=models.CharField(help_text='Frase inicial que ficará em destaque', max_length=100, verbose_name='Frase inicial'),
        ),
    ]