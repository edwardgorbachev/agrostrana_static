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


    scaleMobileContent();
    //window.addEventListener('orientationchange', scaleMobileContent);

});

function scaleMobileContent(){

    console.log('CHANGE ORIENTATION');

    var width = 320;
    var screen_width = screen.width;
    var mobile_width = 500;
    var mobile_width_max = 600;
    var scale = '1';

    if(screen_width <= width ){
        scale = screen_width / parseFloat(mobile_width);
        scale = scale.toFixed(2);
        addMetaViewport( scale );
    }
    else if ( screen_width <= mobile_width_max ) {
        scale = screen_width / parseFloat(mobile_width);
        scale = scale.toFixed(2);
        addMetaViewport( scale );
    }
    else
    {
        addMetaViewport( scale );
    }
}

function addMetaViewport( scale )
{
    viewport = document.querySelector("meta[name=viewport]");
    viewport.setAttribute('content', 'width=device-width, initial-scale='+scale);

    //$('head').append('<meta name="viewport" content="width=device-width, initial-scale="' + scale +'">');

}