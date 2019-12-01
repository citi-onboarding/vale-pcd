$('#contact-form').submit(function(e) {


    document.getElementById("enviar").innerHTML = 'Enviando Mensagem';


    e.preventDefault();
    //alocando os valores do input nas 'constantes'
    const nome = $('input[name=nome').val();
    const email = $('input[name=email').val();
    const assunto = $('input[name=assunto').val();
    const mensagem = $('input[name=mensagem').val();
    const token = jQuery("[name=csrfmiddlewaretoken]").val();

    $.ajax({
        type: 'POST',
        url: '/contato',
        data: {
            'csrfmiddlewaretoken': token,
            'nome': nome,
            'email': email,
            'assunto': assunto,
            'mensagem': mensagem
        },
        success: function(data) {
            alert('Email Enviado');
            document.getElementById("enviar").innerHTML = 'Enviar';
        },
        error: function(data) {
            alert('Email não enviado, tente outra forma de contato');
            document.getElementById("enviar").innerHTML = 'Enviar';
        }

    })

});


function dadosContato(){
   /*  document.getElementById('id1').style.color */
   let estiloFormulario = document.querySelector('#contact-form').style;
   let estiloDegradeEsquerdo =  document.querySelector('#contato-degrade-esquerda').style;
   let estiloDegradeDireito = document.querySelector('#contato-degrade-direita').style;
   let estiloContatoRedesSociais =  document.querySelector('#contato-redes-sociais').style;

    if(estiloFormulario.display == "none"){

        estiloFormulario.display = "flex";
        estiloDegradeDireito.display = "flex";
        estiloDegradeEsquerdo.display = "none";
        estiloContatoRedesSociais.display = "none";

    }else{
        estiloFormulario.display = "none";

        estiloDegradeDireito.display = "none";
        estiloDegradeEsquerdo.display = "none";
        estiloContatoRedesSociais.display = "flex";

    }

}