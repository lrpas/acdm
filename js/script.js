$(document).ready(function () {
    $('.carousel-box').slick({
dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay:true,
    prevArrow: $('.prev'),
    nextArrow: $('.next')
    });
});
