/**
 * Created by Chuang on 9/23/2015.
 */

$(document).ready(function(){

    $('.signupButton').click(function() {
        console.log("clicked");
        alert("Thanks for trying this servce, I'm still working on the backend! You can checkout the a proof of concept here: \n\n https://github.com/chuangli94/textsurfer");
    });

    if(typeof window.orientation !== 'undefined'){  // mobile phone
        $('.logo').css({
            'background-image':'url(../images/text-surfer-logo-mobile.png)'
        });
        $('.nav').css({
           'display' : 'none'
        });
        $('.signup-button-mobile').css({
            'display' : 'block'
        });
    }
});

$(window).scroll(function() {
    // how far we are from top
    var wScroll = $(this).scrollTop();

    $('.logo').css({
        // give a positive scroll to scroll down,
        // divided by 2, so logo scrolls only half as fast
        'transform' : 'translate(0px, '+ wScroll /3 +'%)'
    });

    if(wScroll > $('.content-wrapper').offset().top) {
        $('.nav').css({
            'top':'0%',
            'width':'100%'
        });
        //$('.content-wrapper').css({
        //    'margin-top':'60px',
        //});
    } else {
        $('.nav').css({
            'top':'-50%',
        });
    }

    if(wScroll > $('.feature-demos').offset().top - ($(window).height()/1.2)) {
        $('.feature-demos figure').each(function(i) {
            setTimeout(function(){
                $('.feature-demos figure').eq(i).addClass('is-showing');
            }, 200*(i+1));
        });
    }

    //console.log(wScroll);
});
