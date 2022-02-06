$(document).ready(function() {
    $('.arrow-up').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 300);
    });
});

$(window).scroll(function(){
    if($(this).scrollTop()>100){
        $('.arrow-up').fadeIn();
    }
    else{
        $('.arrow-up').fadeOut();
    }
});

function anim(){
    $('.logo').fadeIn(1000);
    $('.contacts').fadeIn(1000);
    $('.aboutmeh1').fadeIn(1000);
    $('.aboutme').fadeIn(1000);
    $('.experienceh1').fadeIn(1000);
    $('.experience').fadeIn(1000);
    $('.projects-title').fadeIn(1000);
    $('.projects-text').fadeIn(1000);
    $('.icetools').fadeIn(1000);
    $('.project-name').fadeIn(1000);
    $('.footer').fadeIn(1000);
    $('.left-text').fadeIn(1000);
    $('.right-text').fadeIn(1000);
    $('.arrows').fadeIn(1000);
}
anim();
