$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 5,
        nav:false,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })
});  
$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});     

 