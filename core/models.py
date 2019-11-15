from django.db import models

class Relatos(models.Model):
    name = models.CharField('Nome', max_length=65)
    short_text = models.CharField('Texto curto', max_length = 100)
    relato = models.TextField('Relato',max_length=400)
    image = models.ImageField(upload_to='relatos/', verbose_name='Imagem', null=True, blank=True)
    class Meta:
        ordering = ['name']
        verbose_name = 'Relato'
        verbose_name_plural = 'Relatos'

    def __str__(self):
        return self.name
