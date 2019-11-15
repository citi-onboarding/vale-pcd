from django.contrib import admin

from solo.admin import SingletonModelAdmin
from .models import QuemSomos, Relatos
# Register your models here.

class ServicoAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_date')
admin.site.register(QuemSomos, SingletonModelAdmin)
admin.site.register(Relatos)

