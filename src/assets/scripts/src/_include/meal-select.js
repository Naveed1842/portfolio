if (viewportWidth < 992) {
  $('section.meal-selection .panel-meal-selection .meal-selection-grid-wrap .scroll-panel').css('height', windowHeight);
  $('.panel-meal-selection .modify-meal, .panel-meal-selection .select-meal-btn').click(function (e) {
    $(this).parents('.panel-meal-selection').find('.panel-body').addClass('show-popup');
    bodyFreezeScroll();
    e.preventDefault();
  });
}
