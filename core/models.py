from django.db import models

class Relatos(models.Model):
    name = models.CharField('Nome', max_length=65, help_text="Insira o seu nome aqui.")
    description = models.CharField('Texto curto', max_length = 100, help_text="Insira uma breve descrição sobre você.")
    story = models.TextField('Relato',max_length=400, help_text="Insira seu relato aqui.")
    image = models.ImageField(upload_to='relatos/', verbose_name='Imagem', null=True, blank=True, help_text="Insira uma imagem sobre a pessoa.")
    class Meta:
        ordering = ['name']
        verbose_name = 'Relato'
        verbose_name_plural = 'Relatos'

    def __str__(self):
        return self.name
