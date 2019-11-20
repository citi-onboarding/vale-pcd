$('#contact-form').submit(function(e){

    e.preventDefault();
    //alocando os valores do input nas 'constantes'
 const nome=$('input[name=nome').val();
 const email=$('input[name=email').val();
 const assunto=$('input[name=assunto').val();
 const mensagem=$('input[name=mensagem').val();
 const token = jQuery("[name=csrfmiddlewaretoken]").val();

 $.ajax({
     type: 'POST',
     url: '/contato',
     data:{
     'csrfmiddlewaretoken': token,
     'nome':nome,
     'email':email,
     'assunto':assunto,
     'mensagem':mensagem
     },
 })

 });