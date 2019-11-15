from django.shortcuts import render
from django.views import generic
from .models import Relatos
#from .models import "YourModel"
from .models import QuemSomos
# Create your views here.


class HomeView(generic.TemplateView):
    template_name = 'home.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["relatos"] = Relatos.objects.all()
        context["QuemSomos"] = QuemSomos.objects.first()
        return context
