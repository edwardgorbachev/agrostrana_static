$(function(){
    $('#go-to-top').each(function(){
        $(this).click(function(){
            $('html').animate({ scrollTop: 0 }, 'slow'); return true;
        });
    });

    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });

    // $(document).ready(function(){
    //
    //     $(".gallery").slick({
    //         horizontal: true,
    //         infinite: true,
    //         prevArrow : false,
    //         nextArrow : false,
    //         swipe : true,
    //         autoplay : true,
    //         autoplaySpeed : 3000,
    //         responsive : false
    //     });
    //
    // });

});