$(function() {

    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        
        var newBurger = {
            burger_name: $("#newburger")
            .val()
            .trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function() {
            console.log("Added new burger");
            location.reload();
        });
    });
})

$(".eatburger").on("click", function(event) {
    event.preventDefault();
})