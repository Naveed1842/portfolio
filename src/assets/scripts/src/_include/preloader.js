bodyFreezeScroll();
$(window).load(function () {
  //bodyUnfreezeScroll();
  $('.preloader').addClass('disable');
  $(".dropdown-menu").each(function () {
    var elem = $(this).find('.dropdown-option:first-child').find("input").val(0);
    //elem.trigger('change');
  });
});
