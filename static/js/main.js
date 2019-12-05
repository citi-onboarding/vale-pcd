$('#contact-form').submit(function (e) {


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
        success: function (data) {
            alert('Email Enviado');
            document.getElementById("enviar").innerHTML = 'Enviar';
        },
        error: function (data) {
            alert('Email não enviado, tente outra forma de contato');
            document.getElementById("enviar").innerHTML = 'Enviar';
        }

    })

});

function dadosContato() {

    if (document.querySelector(".contato-container-itemsdireita").offsetHeight != 0) {
        document.querySelector("#contact-form").classList.add("display-none");
        document.querySelector(".contato-container-itemsdireita").classList.add("display-none");
        document.querySelector(".contato-container-itemsesquerda").classList.remove("display-none");
        document.querySelector(".contato-container-items2").classList.remove("display-none");
        document.querySelector("#seta-contato").classList.add("container-items-seta-roxa");
    } else {
        document.querySelector("#contact-form").classList.remove("display-none");
        document.querySelector(".contato-container-itemsdireita").classList.remove("display-none");
        document.querySelector(".contato-container-itemsesquerda").classList.add("display-none");
        document.querySelector(".contato-container-items2").classList.add("display-none");
        document.querySelector("#seta-contato").classList.remove("container-items-seta-roxa");
    }
}
