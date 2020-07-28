$(document).ready(function(){
var x = $(".links").height(),
    a = $(".services").outerHeight();

//scroll 
$(window).scroll(function(){
    if($(this).scrollTop() > x/2){
        $(".links").css({
            "position" : "fixed",
            "top" : "0px",
            "width" : "100%",
            "backgroundColor" : "#103f7e",
            "borderBottom" : "white solid 1.5px",
            "transition" : ".5s ease",
        })
              
        $(".fixed-social").css({
            "position" : "fixed",
            "top" : "50%",
        })

        $(".fixed-join").css({
            "position" : "fixed",
            "top" : "60%",
        })
    }
    else{
        $(".links").css({
            "position" : "static",
            "backgroundColor" : "transparent",
            "borderBottom" : "none",
        })
    }
       
})


$(".fixed-social").mouseenter(function(){
    $(".fixed-social").css({
        "marginRight" : "0%",
        "transition" : ".5s",
    })

})

$(".fixed-social").mouseleave(function(){
    $(".fixed-social").css({
       /*"marginRight" : "-5.5%"*/
    })
})

$(".fixed-join").mouseenter(function(){
    $(".fixed-join").css({
        "left" : "0%",
        "transition" : ".5s",
    })
})

$(".fixed-join").mouseleave(function(){
    $(".fixed-join").css({
       "left" : "-8.5%"
    })
})


$(window).scroll(function(){
    if($(window).scrollTop() > a ){
        $(".left").delay(300).fadeIn(900).animate({
            marginLeft : "0%",
        },900)

        $(".right").delay(300).fadeIn(900).animate({
            marginRight : "0%",
        },900)

        $(".up").delay(300).fadeIn(900).animate({
            marginTop : "0%",
        },900)


    }
})



})