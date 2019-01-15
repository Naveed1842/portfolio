//Mobile Header
$('.header-inner > .brand').clone().prependTo('.mobile-header');
//$('.search-box-wrap .search-panel .search-header').clone().appendTo('.mobile-header .mobile-menu-wrap');
$('.header-inner > .main-nav').clone().appendTo('.mobile-header .mobile-menu-wrap');
//$('.header-inner > .main-nav').clone().appendTo('.mobile-header .mobile-menu-wrap');

$('header .mobile-header .mobile-menu-wrap ul.main-nav > li > a').click(function (e) {
  //$('header .mobile-header .mobile-menu-wrap ul.main-nav li .sub-menu').removeClass('active');
  $(this).parent('li').siblings().find('.sub-menu').removeClass('active');
  $(this).next('.sub-menu').toggleClass('active');
  e.preventDefault();
});

$("header .header-inner .main-nav > li a").click(function () {
  if ($(this).next('.sub-menu').length) {
    $(this).parent().toggleClass('active');
    isheaderActive();
  } else {
    $(this).parent('li').siblings().removeClass('active');
    $('.jazeera_overlay, header').removeClass('active');
    bodyUnfreezeScroll();
  }
});

$('.mobile-menu-toggle, .close-mobile-header').click(function () {
  $('.mobile-menu-toggle').toggleClass('active');
  $('.mobile-menu-wrap').toggleClass('active');
  $('.mobile-login-toggle').removeClass('active');
});

$('.mobile-login-toggle').click(function (e) {

  $('.mobile-menu-wrap').removeClass('active');
  $(this).toggleClass('active');

  if ($(this).hasClass('active')) {
    $('.dropdown-login-register').prev('.btn').addClass('active');
    $('.dropdown-login-register').addClass('show');
    $('.jazeera_overlay, header').addClass('active');
    bodyFreezeScroll();
  } else {
    $('.dropdown-login-register').prev('.btn').removeClass('active');
    $('.dropdown-login-register').removeClass('show');
    $('.jazeera_overlay, header').removeClass('active');
    bodyUnfreezeScroll();
  }

  e.preventDefault();
});


$('.login-switcher-btns .radio-wrap').click(function () {
  $('.login-form-wrap div').removeClass('active');
  var selectedform = $(this).find('input').attr('id');
  $('.login-form-wrap div[data-form="' + selectedform + '"]').addClass('active');
});
