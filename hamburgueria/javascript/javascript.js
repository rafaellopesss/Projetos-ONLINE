var adicionar = document.getElementsByClassName('botao')
var carrinho = document.getElementById('carrinho')
var menu = document.getElementById('menu')
var componentes = document.getElementById('lista-menu')
function clicando(){
    if (menu.innerText == 'menu') {
        componentes.style.display = 'block'
        menu.innerText = 'close'
    }else{
        componentes.style.display = 'none'
        menu.innerText = 'menu'
    }
}
for (contador = 0; contador < adicionar.length; contador ++){
    adicionar[contador].addEventListener('click', function(){
        
        if (carrinho.style.display = 'none'){

            carrinho.style.display = 'block'

            carrinho.style.padding = '20px'
            setTimeout(function(){
                carrinho.style.transition = '0.8s'
                carrinho.style.padding = '15px'
            }, 900)
        
        }
    
    })
}
