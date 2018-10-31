$(document).ready(function () {

    $('#slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 600,
        fade: true,
        pauseOnHover: false,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 11000
    });
    $('#testimonials-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 600,
        fade: true,
        pauseOnHover: false,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 11000
    });

    var nav = $(".navbar");
    var nav_height = nav.height();
    var top_header = $('.top-header');
    var top_header_height = top_header.outerHeight();






    $(window).scroll(function () {
        if ($(window).width() > 979) {
            if ($(this).scrollTop() > top_header_height && !nav.hasClass("navbar-fixed-top")) {
                nav.addClass("navbar-fixed-top");
                $('#profile-band').fadeOut(200);
                setTimeout(function () {
                    $('.start_now').show();
                }, 250);
                top_header.css('margin-bottom', nav_height + 'px');
            } else if ($(this).scrollTop() <= top_header_height && nav.hasClass("navbar-fixed-top")) {
                $('.start_now').fadeOut(200);
                setTimeout(function () {
                    $('#profile-band').show();
                }, 250);
                nav.removeClass("navbar-fixed-top");
                top_header.css('margin-bottom', '0px');
            }
        } else {
            var total_header_height = nav_height + top_header_height;
            if ($(this).scrollTop() > total_header_height && !nav.hasClass("navbar-fixed-top")) {
                nav.fadeOut('fast', function () {
                    $(this).addClass("navbar-fixed-top")
                        .fadeIn('fast');
                    top_header.css('margin-bottom', nav_height + 'px');
                    $('#profile-band').hide();
                    $('.start_now').show();
                });
            } else if ($(this).scrollTop() <= total_header_height && nav.hasClass("navbar-fixed-top")) {
                nav.removeClass("navbar-fixed-top");
                top_header.css('margin-bottom', '0px');
                $('.start_now').hide();
                $('#profile-band').show();
            }
        }
    });
});