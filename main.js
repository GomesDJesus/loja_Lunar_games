
$(document).ready(function(){

    let contador = 0

    $('.itens button').click(function(){

        contador++;

        $('.list .carrinho').css({
            'display': 'block'
        })

        $('.list .status-carrinho').css({
            'display': 'none'
        })

    $('.list .carrinho').html(contador)
    })

    
})