$(document).ready(function() {
    
    $('form').on('submit', function(e) {
        e.preventDefault();
        
        const tarefa = $('#tarefa').val();
        const novaTarefa = $('<li></li>');
        $(`<li>${tarefa}</li>`).appendTo(novaTarefa);
        $(novaTarefa).appendTo('ul');
        $('li').click(function() {
            $(this).css('text-decoration', 'line-through');
        })
        $('#tarefa').val('');
    });
});