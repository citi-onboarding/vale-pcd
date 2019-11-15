from django.db import models
from solo.models import SingletonModel

# Create your models here.

#Seção: Quem Somos
class QuemSomos(SingletonModel):
    subtitulo = models.CharField('Frase inicial',max_length=100,help_text="Frase inicial que ficará em destaque")
    descricao = models.TextField('Descrição', max_length=400,help_text="Descrição da seção: 'Quem somos' ")
    imagem = models.ImageField(upload_to='quemSomos/', verbose_name='Imagem',help_text="Imagem que ficará na seção: 'Quem Somos' ")


    #Usado para ajustar o plural
    class Meta:
        verbose_name = 'Quem Somos'
    #Retorna o nome
    def __str__(self):
        return "Quem Somos"