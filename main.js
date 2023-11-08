$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault(); //Previne o comportamento padrão de atualizar do submit.

        const novaTarefa = $('#nome-tarefa').val(); //Atribui o valor do campo de adicionar tarefa
        const novoItem = $(`
            <li>
                <a href="#" class="#">${novaTarefa}</a>
            </li>
            <br>
        `); // Cria um novo elemento na lista de tarefas
        $(novoItem).appendTo('ol');
        $(novoItem).fadeIn(1000);
        $('#nome-tarefa').val('');// Reseta o Input
    })
    //Executa a mudança de classe do elemento específico da lista
    $('#task-list').on('click', 'li', function(){
        $(this).toggleClass('completo');
    })
})

