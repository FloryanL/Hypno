$(document).ready(function(){

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
        $(".horairesTarif").fadeIn();
    });

    $(".closeHorairesTarif").click(function(){
        $(".horairesTarif").fadeOut();
    });

});


