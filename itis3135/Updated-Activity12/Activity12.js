$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        //minSlides: 2,
        //maxSlides: 2,
        slideWidth: 300,
        slideMargin: 20,
        captions: true,
        speed:2000,
        pagerType:'short',
        pagerSelector:'#id_pager',
        randomStart:true
    });
});