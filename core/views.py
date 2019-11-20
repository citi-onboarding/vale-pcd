from django.shortcuts import render
from django.views import generic
from .models import Relatos
from .models import QuemSomos
from django.http import HttpResponse
from django.core.mail import EmailMessage
# Create your views here.


class HomeView(generic.TemplateView):
    template_name = 'home.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["relatos"] = Relatos.objects.all()
        context["QuemSomos"] = QuemSomos.objects.first()
        return context

def index(request):
    return render(request, 'home.html')


def email(request):
    nome = request.POST.get('nome')
    email = request.POST.get('email')
    assunto= request.POST.get('assunto')
    mensagem = request.POST.get('mensagem')

   #corpo do email
    corpoEmail = f'Nome:{nome}\n Assunto: {assunto}\n Email: {email}\n Mensagem: {mensagem}'

    """ O primeiro email é o que envia e o segundo é o que recebe """
    mail = EmailMessage(assunto,corpoEmail,'valepcd.site@gmail.com',['valepcd.site@gmail.com'])
    result = mail.send()