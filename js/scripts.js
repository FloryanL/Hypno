$(document).ready(function(){

    $('a[href^="#"]').click(function(){
        var the_id = $(this).attr("href");

    $('html, body').animate({
        scrollTop:$(the_id).offset().top
        }, 'slow');
        return false;
    });


	//afficher masquer lightbox pourquoi?

    $("#btnPourquoi").click(function(){
        $(".pourquoi").fadeIn();
    });

    $(".closePourquoi").click(function(){
        $(".pourquoi").fadeOut();
    });

    //afficher masquer lightbox pour qui?

    $("#btnPourqui").click(function(){
        $(".pourQui").fadeIn();
    });

    $(".closePourQui").click(function(){
        $(".pourQui").fadeOut();
    });

    //afficher masquer lightbox comment?

    $("#btnComment").click(function(){
        $(".comment").fadeIn();
    });

    $(".closeComment").click(function(){
        $(".comment").fadeOut();
    });

    //afficher masquer lightbox horaires et tarifs

    $("#btnHorairesTarif").click(function(){
        $(".horairesTarifs").fadeIn();
    });

    $(".closeHorairesTarif").click(function(){
        $(".horairesTarifs").fadeOut();
    });

});


