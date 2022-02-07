$(function(){   

    abrirJanela();
    fecharJanela();

    function abrirJanela(){
        $('.btn').click(function(e){
            e.stopPropagation();
            $('.bg').fadeIn();
        });
    }

    function fecharJanela(){
        var el = $('body, .closeBtn');
        el.click(function(){
            $('.bg').fadeOut();
        }) 

        $('.form').click(function(e){
            e.stopPropagation();

        })
    }
    
});

    
    //evetos de formulario
    $('form#form1').submit(function(e){
        e.preventDefault();
        var nome = $('input[name=nome]').val();
        var telefone = $('input[name=telefone]').val();
        var email = $('input[name=email]').val();

        if (verificarNome(nome) == false) {
            aplicarCampoInvalido($('input[name=nome]'));
        }else{
            alert('Enviado!')
        }
        
        
       
        
        //função para erro no campo
        function aplicarCampoInvalido(el){
            el.css('border','2px solid red');
            el.val('Campo Inválido');
            el.css('color','red');
            //el.data('invalido','true')
        }

        function resetarCampoInvalido(el){
            el.css('border','1px solid #ccc');
            el.val('');
            el.css('color','black');
        }
       
    $('input[type=text]').focus(function(){
        resetarCampoInvalido($(this));
    })

        //função de verificação
        function verificarNome(nome){
            if (nome == ' ') { 
                return false;
            }
         var amount = nome.split(' ').length;
         var splitStr = nome.split(' ');
        if (amount >= 2){
           for(var i = 0; i < amount; i++){
               if (splitStr[i].match(/^[A-Z]{1}[a-z]{1,}$/)){
                   return true;
               }else{
                return false;
               }
           }
        }else{
            return false;
        }
        }

        
    });




//butão exit
var ex = document.getElementById('exit')
 function entrar(){ 
    ex.style.background='red'
}
function sair(){
    ex.style.background = 'rgb(224, 224, 224)'
}