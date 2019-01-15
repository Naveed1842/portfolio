$('.btn-dropdown').click(function () {
  $(this).parents('li').siblings().find('.btn-dropdown').removeClass('active');
  $(this).toggleClass('active');
  $(this).parents('li').siblings().find('.btn-dropdown-menu').removeClass('show');
  $(this).next('.btn-dropdown-menu').toggleClass('show');
  $('header .header-inner .main-nav > li').removeClass('active');
  isheaderActive();
});

$('#closeSearch').click(function () {
  $('.search-box-wrap').removeClass('active');
  issearchActive();
});

$('#showSearchPanel').click(function () {
  $('.btn.btn-dropdown').removeClass('active');
  $('.search-box-wrap').addClass('active');
  issearchActive();
});


$('#closeModifySearch').click(function () {
  $('.modify-search-wrap').removeClass('active');
  isModifySearchActive();
});

$('#showModifySearchPanel').click(function (e) {
  $('.btn.btn-dropdown').removeClass('active');
  $('.modify-search-wrap').addClass('active');
  isModifySearchActive();
  e.preventDefault();
});

//$('.btn-dropdown-menu').click(function(e){
$(".btn-dropdown-menu").on('click', function () {
  if ($(this).hasClass('show')) {
    $('.jazeera_overlay').addClass('active');
    bodyFreezeScroll();
  } else {
    $('.jazeera_overlay').removeClass('active');
    bodyUnfreezeScroll();
  }
});

$(".search-panel").on('click', function () {
  if ($(this).parent().hasClass('active')) {
    bodyFreezeScroll();
  } else {
    bodyUnfreezeScroll();
  }
});

$(".main-nav > li .sub-menu").on('click', function () {
  if ($(this).parent().hasClass('active')) {
    $('.jazeera_overlay').addClass('active');
    bodyFreezeScroll();
  } else {
    $('.jazeera_overlay').removeClass('active');
    bodyUnfreezeScroll();
  }
});

$('.dropdown-wrap').click(function (e) {
  //$(this).toggleClass('active');
  $(this).toggleClass('show');
  e.preventDefault();
});

$('.dropdown-toggle').click(function () {
  var dropmenu = $(this).attr('data-toggle');
  $(this).next('.' + dropmenu).toggleClass('show');
});
$('.dropdown-arrow').click(function () {
  $(this).prev('.dropdown-menu').toggleClass('show');
});


$('.dropdown-menu .dropdown-option').click(function () {
  $(this).parents('.dropdown-wrap').find('.dropdown').empty().append($(this).find('h5').html());
});


$('.custom-select').each(function (e) {
  if ($(this).val() == '') {
    $(this).parents('.form-field').removeClass('populated');
  } else {
    $(this).parents('.form-field').addClass('populated');
  }
});

$('.custom-select').change(function (e) {
  if ($(this).val() == '') {
    $(this).parents('.form-field').removeClass('populated');
  } else {
    $(this).parents('.form-field').addClass('populated');
  }
});

if (viewportWidth < 767) {
  $('.footer-navigation .col-md-3:last-child .footer-menu').addClass('active default-active');
  $('.footer-menu li a strong').click(function (e) {
    if (!$(this).parents('.footer-menu').hasClass('default-active')) {
      $(this).parents('.col-md-3').siblings().find('.footer-menu').removeClass('active');
      $('.footer-navigation .col-md-3:last-child .footer-menu').addClass('active default-active');
      $(this).parents('.footer-menu').toggleClass('active');
      e.preventDefault();
    }
  });

  $('.footer-navigation .col-md-3:last-child .footer-menu').click(function (e) {
    return false;
    e.preventDefault();
  });
}
