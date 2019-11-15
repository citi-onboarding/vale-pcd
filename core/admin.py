from django.contrib import admin
from .models import Relatos

# Register your models here.
class ServicoAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_date')

admin.site.register(Relatos)