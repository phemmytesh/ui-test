/*
* Task C2 - Javascript - Using jQuery JavaScript Library v2.1.4
 */

$(document).ready(function() {

    $("#mango").on("click", function() {
        $(".modal-container, .modal").addClass("active");
        $('#head').html($('#mango-title').text());
        $('#image').html('<img src="img/mangoes.png" height="100px" alt="Mangoes" style="float: right" />');
        $('#torso').html($('#mango-body').text());
    });

    $("#strawberry").on("click", function() {
        $(".modal-container, .modal").addClass("active");
        $('#head').html($('#strawberry-title').text());
        $('#image').html('<img src="img/strawberries.png" height="100px" alt="Strawberries" style="float: right" />');
        $('#torso').html($('#strawberry-body').text());
    });

    $("#guava").on("click", function() {
        $(".modal-container, .modal").addClass("active");
        $('#head').html($('#guava-title').text());
        $('#image').html('<img src="img/guavas.png" height="100px" alt="Guavas" style="float: right" />');
        $('#torso').html($('#guava-body').text());
    });

    $("button").on("click", function() {
        $(".modal-container, .modal").removeClass("active");
        $('#head').html('');
        $('#image').html('');
        $('#torso').html('');
    });

});


