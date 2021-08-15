$(document).ready(function() {
    // window srcoll show;
    $(window).scroll(function() {
        var scrolling = $(this).scrollTop();
        if (scrolling > 500) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
        if (scrolling > 300) {
            $('nav').addClass('nav-fix');
        } else('nav').removeClass('nav-fix');
    });
    // back-to-top button ;
    $('.back-to-top').click(function() {
        $('html,body').animate({
            scrollTop: 0,
        }, 1500);
    });
    //testimonial play-icon pop up;
    $('.venobox').venobox();

    //testimonial slider;
    $('.slider-item').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        // autoplay: true,
        responsive: [

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                }
            }

        ]
    });
    //count text counter up;
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
    //funfact sastified;
    $('.sastified').slick({
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
    });
    $('.employees').slick({
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
    });
});