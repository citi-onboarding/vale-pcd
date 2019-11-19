from django.db import models
from solo.models import SingletonModel

class Relatos(models.Model):
    name = models.CharField('Nome', max_length=100)
    description = models.CharField('Texto curto', max_length = 100, help_text="Insira uma breve descrição sobre a pessoa do relato.")
    story = models.TextField('Relato',max_length=400)
    image = models.ImageField(upload_to='relatos/', verbose_name='Foto', null=True, blank=True)
    class Meta:
        ordering = ['name']
        verbose_name = 'Relato'
        verbose_name_plural = 'Relatos'

    def __str__(self):
        return self.name

class QuemSomos(SingletonModel):
    descricao = models.TextField('Descrição', max_length=400,help_text="Descrição da seção: 'Quem somos' ")
    subtitulo = models.CharField('Frase inicial',max_length=100,help_text="Frase inicial que ficará em destaque")
    imagem = models.ImageField(upload_to='quemSomos/', verbose_name='Imagem',help_text="Imagem que ficará na seção: 'Quem Somos' ")


    #Usado para ajustar o plural
    class Meta:
        verbose_name = 'Quem Somos'
    #Retorna o nome
    def __str__(self):
        return "Quem Somos"