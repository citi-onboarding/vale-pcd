from django.db import models
from solo.models import SingletonModel

# Create your models here.

#Seção: Quem Somos
class QuemSomos(SingletonModel):
    subtitulo = models.CharField('Subtítulo',max_length=100,blank=True)
    descricao = models.TextField('Descrição', max_length=400, blank=True)
    imagem = models.ImageField(upload_to='quemSomos/', verbose_name='Imagem', null=True, blank = True)


    #Usado para ajustar o plural
    class Meta:
        verbose_name = 'QuemSomos'
    #Retorna o nome
    def __str__(self):
        return "Quem Somos"