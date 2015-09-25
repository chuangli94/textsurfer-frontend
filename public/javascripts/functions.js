/**
 * Created by Chuang on 9/23/2015.
 */

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
