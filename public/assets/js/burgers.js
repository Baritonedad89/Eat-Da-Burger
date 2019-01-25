$(function () {
$(".change-devoured").on('click', ()=> {
    const id = $(this).data("id");
    
    // const isDevoured = $(this).data("devoured");
    // isDevoured = true;

    const isDevoured = {
        devoured: true
      };


// Send the PUT request.
$.ajax(`/api/burgers/${id}`, {
    type: "PUT",
    data: isDevoured
  }).then(
    function() {
        console.log(data)
    //   console.log("changed sleep to", newSleep);
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