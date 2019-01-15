//Toggle Promo
$('.promo-wrap .add-promo').click(function () {
  $(this).toggleClass('hide');
  $(this).next('.promo-info').addClass('show');
});

//Validate Promo
$('.promo-info input').keyup(function () {
  if ($(this).val().length >= 6) {
    $(this).parent().find('.validate.success').show();
    $(this).parent().find('.validate.error').hide();
  } else {
    $(this).parent().find('.validate.success').hide();
    $(this).parent().find('.validate.error').show();
  }
  if ($(this).val().length == 0) {
    $(this).parents('.promo-info').removeClass('show');
    $(this).parents('.promo-info').prev('.add-promo').removeClass('hide');
  }
});
