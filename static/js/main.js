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

var contatoTelaAtual = "verde";
function dadosContato() {
    /*  document.getElementById('id1').style.color */
    let estiloFormulario = document.querySelector('#contact-form').style;
    let estiloDegradeEsquerdo = document.querySelector('#contato-degrade-esquerda').style;
    let estiloDegradeDireito = document.querySelector('#contato-degrade-direita').style;
    let estiloContatoRedesSociais = document.querySelector('#contato-redes-sociais').style;
    let estiloItemsEsquerda = document.querySelector("#contato-container-itemsesquerda").style;
    let estiloContatoContainer = document.querySelector(".contato-container").style;
    let estiloBotao = document.querySelector(".container-items-seta").style;

    if (estiloFormulario.display == "none") { //formulário escondido

        //mostrar formulário
        estiloFormulario.display = "flex";
        //mostrar degradÊ direito
        estiloDegradeDireito.display = "flex";
        //esconder degradê esquerdo e itens da esquerda
        estiloDegradeEsquerdo.display = "none";
        estiloContatoRedesSociais.display = "none";
        estiloItemsEsquerda.width = "0vw";
        estiloItemsEsquerda.heigth = "0vh";
        estiloContatoContainer.paddingTop = "80px";
        estiloItemsEsquerda.display = "none";

        //Ajustar posição do botão
        estiloBotao.position = "";
        estiloBotao.left = "";
        estiloBotao.transform = "rotate(0deg)";

        contatoTelaAtual = "verde";


    } else { // formulário à mostra

        //esconder formulário
        estiloFormulario.display = "none";

        estiloContatoContainer.paddingTop = "50px";
        estiloItemsEsquerda.width = "100vw";
        estiloItemsEsquerda.height = "76vh";
        estiloItemsEsquerda.display = "flex";
        estiloDegradeDireito.display = "none";
        estiloDegradeEsquerdo.display = "none";
        estiloContatoRedesSociais.display = "flex";

        //Ajustar posição do botão
        estiloBotao.position = "absolute";
        estiloBotao.transform = "rotate(180deg)";
        estiloBotao.left = "15vw";

        contatoTelaAtual = "roxo";

    }

}


//Ajustar responsividade
window.addEventListener('resize', function () {
    let windowWidth = window.innerWidth;

    if (windowWidth > 800) {
        //Ajustar responsividade web
        //ajustar itens da esquerda
        document.querySelector('#contato-degrade-esquerda').style.display = "flex";
        document.querySelector("#contato-container-itemsesquerda").style.display = "flex";
        document.querySelector(".contato-container").style.paddingTop = "80px";

        document.querySelector('#contato-degrade-direita').style.display = "flex";
        document.querySelector('#contato-redes-sociais').style.display = "flex";
        document.querySelector('#contact-form').style.display = "flex";
        document.querySelector('#contact-form').style.marginRight = "40%";

        //Ajustar botão
        document.querySelector(".container-items-seta").style.position = "";
        document.querySelector(".container-items-seta").style.transform = "rotate(0deg)";
        document.querySelector(".container-items-seta").style.left = "";

        contatoTelaAtual = "verde";


    } else { //ajustar responsividade mobile
        //escondendo itens da esquerda
        document.querySelector('#contato-degrade-esquerda').style.display = "none";

        if (contatoTelaAtual == "roxo") {


        } else {
            document.querySelector("#contato-container-itemsesquerda").style.display = "none";

        }

        document.querySelector('#contact-form').style.marginRight = "11%";
        document.querySelector("#contato-container-itemsesquerda").style.width = "";
        document.querySelector("#contato-container-itemsesquerda").style.height = "";


    }
});