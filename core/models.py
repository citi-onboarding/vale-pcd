from django.db import models
from solo.models import SingletonModel

class Relatos(models.Model):
    name = models.CharField('Nome', max_length=65, help_text="Insira o nome.")
    description = models.CharField('Texto curto', max_length = 100, help_text="Insira uma breve descrição sobre a pessoa do relato.")
    story = models.TextField('Relato',max_length=400, help_text="Insira o relato aqui.")
    image = models.ImageField(upload_to='relatos/', verbose_name='Imagem', null=True, blank=True, help_text="Insira uma imagem sobre a pessoa.")
    class Meta:
        ordering = ['name']
        verbose_name = 'Relato'
        verbose_name_plural = 'Relatos'

    def __str__(self):
        return self.name


class QuemSomos(SingletonModel):
    descricao = models.TextField('Descrição', max_length=400)
    subtitulo = models.CharField('Frase inicial',max_length=100,help_text="Frase inicial que ficará em destaque")
    imagem = models.ImageField(upload_to='quemSomos/', verbose_name='Imagem')


    #Usado para ajustar o plural
    class Meta:
        verbose_name = 'Quem Somos'
    #Retorna o nome
    def __str__(self):
        return "Quem Somos"
