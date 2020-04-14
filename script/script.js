$(document).ready(function() {

    $("#contact-submit-btn").on("click", function() {
        
        alert($("#name").val());
        alert($("#email").val());
        alert($("#comment").val());
    });

});