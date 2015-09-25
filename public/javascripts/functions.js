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

    if(wScroll > $('.feature-demos').offset().top - ($(window).height()/1.2)) {
        $('.clothes-pics figure').each(function(i) {
            setTimeout(function(){
                $('.clothes-pics figure').eq(i).addClass('is-showing');
            }, 200*(i+1));
        });
    }

    //console.log(wScroll);
});
