var windowHeight = $(window).height();
var viewportWidth = $(window).width();

function noscroll() {
  window.scrollTo(0, 0);
}

function bodyFreezeScroll() {
  window.addEventListener('scroll', noscroll);
  $('body').css({'overflow': 'hidden', 'max-height': windowHeight});
  $('body').addClass('scroll-disabled');
}

function bodyUnfreezeScroll() {
  window.removeEventListener('scroll', noscroll);
  $('body').css({'overflow': 'auto', 'max-height': 'inherit'});
  $('body').removeClass('scroll-disabled');
}

function isheaderActive() {
  if ($('.btn-dropdown-menu').hasClass('show') || $('.main-nav > li').hasClass('active')) {
    $('.jazeera_overlay, header').addClass('active');
    bodyFreezeScroll();
  } else {
    $('.jazeera_overlay, header').removeClass('active');
    bodyUnfreezeScroll();
  }
}

function issearchActive() {
  if ($('.search-box-wrap').hasClass('active')) {
    bodyFreezeScroll();
  } else {
    bodyUnfreezeScroll();
  }
}

function isModifySearchActive() {
  if ($('.modify-search-wrap').hasClass('active')) {
    bodyFreezeScroll();
  } else {
    bodyUnfreezeScroll();
  }
}


$.fn.pVal = function () {
  var $this = $(this),
    val = $this.eq(0).val();
  if (val == $this.attr('placeholder'))
    return '';
  else
    return val;
};
