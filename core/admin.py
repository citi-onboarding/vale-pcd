from django.contrib import admin
from solo.admin import SingletonModelAdmin
from .models import QuemSomos
# Register your models here.

class ServicoAdmin(admin.ModelAdmin):
    list_display = ('title', 'created_date')
admin.site.register(QuemSomos, SingletonModelAdmin)