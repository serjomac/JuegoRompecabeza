$(document).ready(function() {
    
    $("#imagenes > a:gt(0)").hide();

    $("#siguiente").click(function(){
        $("#imagenes > a:first")
        .fadeOut(0)
        .next()
        .fadeIn(0)
        .end()
        .appendTo("#imagenes");
    });
    
    $("#atras").click(function(){
        $("#imagenes > a:gt(0)")
        .fadeIn(0)
        .prev()
        .fadeOut(0)
        .appendTo("#imagenes");
    });
});