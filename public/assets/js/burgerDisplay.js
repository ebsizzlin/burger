$(() => {
    //submit
    $('#submit').on('submit', (event) => {
        event.preventDefault();

        var newBurger = {
            burger_name: $('#name').val().trim(),
            devoured: false
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
        var newDevour = $(this).data('newDevour');

        var devourState = {
            devoured: true
        };
        console.log('devourState:', devourState)

        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: devourState
        }).then(
            () => {
                console.log('changed to devoured', devoured);
                location.reload(); //reload to update
            }
        )
    })

});