$(document).ready(function(){
    
    $('#botao-resetar').click(function(){
        $('ul').val('');
    });

    $('form').on('submit', function(e){
        e.preventDefault();
        const novaTarefa = $('#nome-tarefa').val();
        const novoItem = $(`
            <li>
                <a href="#" id="check">${novaTarefa}</a>
            </li>
            <br>
        `);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#nome-tarefa').val('');
    })

    $('ul').on('click', function(){
        $('ul li a').css({'text-decoration': 'line-through'});
    })
})

