
$(document).ready(function () {
    $('.block-about__slider').slick({
        arrows: false,
        fade: true,
        dots: true,
    });
    $('.block-what__slider').slick({
        arrows: false,
        fade: true,
        dots: true,

        speed: 1000,
        easing: "ease",

        asNavFor: ".block-what__slider-text",
    });
    $('.block-what__slider-text').slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        appendArrows: $('.block-what__slider__arow'),

        speed: 1000,
        easing: "ease",

        asNavFor: ".block-what__slider",
    });
});



