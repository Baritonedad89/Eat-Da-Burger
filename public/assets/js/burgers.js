$(document).ready(function() {
    

    $(".change-devoured").on('click', function(event) {
    const id = $(this).data("id");
    const isDevoured = $(this).data('devoured');

    var nowEaten = {
      devoured: 1
    };
    
    $('.burger-names').each(function () {
        if($(this).data('id') == 'true') {
            $(this).addClass('burger-names-eaten')
        }
    })
   

// Send the PUT request.
$.ajax(`/api/burgers/${id}`, {
    type: "PUT",
    data: nowEaten
  }).then(
    function() {
        
        // console.log(data)
      // Reload the page to get the updated list
      location.reload();
    }
  );
})







    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        const newBurger = {
            name: $("#textarea1").val().trim()
        };
        console.log(newBurger)

        // send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(()=> {
            console.log('created new burger');
            location.reload();
        });

    });
});