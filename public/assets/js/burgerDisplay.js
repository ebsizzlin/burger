$(() => {
    //submit
    $('#submit').on('submit', (event) => {
        event.preventDefault();

        var newBurger = {
            burger_name: $('#burgerName').val().trim(),
            devoured: $("[name=devoured]:checked").val()
        };

        //post
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(
            () => {
                console.log('created new burger');
                location.reload(); //reload to update
            }
        );
    });

    //btnDevour
    $('.btnDevour').on('click', (event) => {
        var id = $(this).data('id');
        var devoured = $(this).data('devoured');

        var newlyDevoured = {
            devoured: devoured
        }

        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: newlyDevoured
        }).then(
            () => {
                console.log('changed to devoured', devoured);
                location.reload(); //reload to update
            }
        )
    })

});