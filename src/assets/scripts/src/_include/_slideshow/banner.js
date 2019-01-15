//Banner Slideshow
var $bannerSlider = $('.slideshow-wrapper .slideshow').on('init', function (slick) {
  $('.slideshow-wrapper').addClass('loaded');
}).slick({
  lazyLoad: 'ondemand',
  autoplay: false,
  autoplaySpeed: 5000,
  dots: true,
  arrows: false,
  centerMode: false,
  infinite: false,
  speed: 800,
  fade: true,
  pauseOnHover: false,
  pauseOnFocus: false,
  appendDots: ".slideshow-controls .container",
  prevArrow: $('.banner-prev'),
  nextArrow: $('.banner-next')
});
