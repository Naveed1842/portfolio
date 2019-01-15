//Carousel Slideshow
if (viewportWidth > 768) {

  var $carouselSlider = $('.carousel-wrap .carousel').on('init', function (slick) {
    $('.carousel-wrap').addClass('loaded');
  }).slick({
    lazyLoad: 'ondemand',
    autoplay: false,
    autoplaySpeed: 5000,
    dots: false,
    arrows: true,
    infinite: false,
    speed: 800,
    fade: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: '15px',
    prevArrow: $('.carousel-prev'),
    nextArrow: $('.carousel-next'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  });

}
