//clear location select
$('.location-select').parent().append('<span class="clearInput"><i class="icon-wrong"></i></span>');

$('.clearInput').click(function () {

  var selectedCode = $(this).parents('.form-field').find('input').attr('data-selected');
  $('.tt-menu .tt-dataset').find('.tt-suggestion[data-code="' + selectedCode + '"]').show();
  $(this).parents('.form-field').find('input').removeAttr('data-selected');

  $(this).parents('.form-field').removeClass('populated');
  $(this).parents('.form-field').find('input').focus().val("").trigger("input").parents('.locations').addClass('show-popup');
  $('.switchLocations').removeClass('active');
  checkFlightLocationInputStatus();

  $('.range-picker-wrap.active').removeClass('active');
  $('.daterangepicker-single.show-popup').removeClass('show-popup');

});

$('.close-popup').click(function () {
  $(this).parents().removeClass('show-popup');
});


/*switch location button*/
$('.switchLocations').click(function (e) {
  var locations = [];
  var codes = [];
  var from = $(this).parents('.form-row').find('.locations:first-child').find('.tt-input').val();
  var from_code = $(this).parents('.form-row').find('.locations:first-child').find('.tt-input').attr('data-selected');
  var to = $(this).parents('.form-row').find('.locations:last-child').find('.tt-input').val();
  var to_code = $(this).parents('.form-row').find('.locations:last-child').find('.tt-input').attr('data-selected');

  if (from != '' && to != '') {
    locations.push(from, to);
    codes.push(from_code, to_code);
  }
  if (locations.length > 1) {
    $(this).prev().find('input').val(locations[1]);
    $(this).prev().find('input').attr('data-selected', codes[1]);
    $(this).next().find('input').val(locations[0]);
    $(this).next().find('input').attr('data-selected', codes[0]);
  }
  e.preventDefault();
});
/*switch location button*/


//Close button - flight rows
$('.form-row.row + .hidden-field-group .form-row').each(function () {
  $(this).append('<div class="close-row"><i class="icon icon-wrong"></i></div>');
});


$('.form-row.row + .hidden-field-group .form-row .close-row').click(function () {

  $(this).parent('.form-row').removeClass('active');

  $(this).parent('.form-row').find('.single-date-picker').data('dateRangePicker').clear();
  $(this).parent('.form-row').find('.float-label-wrapper').removeClass('populated');
  $(this).parent('.form-row').nextAll().find('.float-label-wrapper').removeClass('populated');

  $(this).parent('.form-row').find('input').val('');
  $(this).parent('.form-row').nextAll().find('input').val('');
  $(this).parents('.form-row').find('.locations input').removeAttr('data-selected');
  $(this).parents('.form-row').nextAll().find('.locations input').removeAttr('data-selected');
  $(this).parents('.form-row').find('.location-select').typeahead('val', '');
  $(this).parents('.form-row').nextAll().find('.location-select').typeahead('val', '');

  if ($('.form-row.row + .hidden-field-group .form-row:not(.active)').length >= 1) {
    $('#addFlight').removeClass('disabled');
  } else {
    $('#addFlight').addClass('disabled');
  }
});
