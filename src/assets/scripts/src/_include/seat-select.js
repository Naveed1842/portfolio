$('.flight-mockup-wrap input:checkbox').change(function (e) {
  var selectedSeats = [];
  $(this).parents('.flight-mockup-wrap').find('input:checked').each(function () {
    var seatNumber = $(this).attr('id');
    selectedSeats.push(seatNumber)
  });
  console.log(selectedSeats)
  e.preventDefault();
});

$('.selected-seat-info-wrap .modify-seat').click(function (e) {
  var modifySeat = $(this).attr('href');
  if ($(modifySeat).length) {
    $('section.seat-selection .panel-seat-selection .seat-selection-outer-wrap .scroll-panel').scrollTo(modifySeat, 500, {
      offset: -100
    });
  } else {
    console.log('Error, please match the selected seat id and modify button href link.');
  }
  e.preventDefault();
});


if (viewportWidth < 991) {
  $('.selected-passengers .modify-seat, .select-seat-msg .select-seat-btn').click(function (e) {
    $('.accordion-item').removeClass('show-active');
    $(this).parents('.accordion-item').addClass('show-active');
    //bodyFreezeScroll();
    e.preventDefault();
  });
  $('.form-file-label .close-popup').click(function (e) {
    $('.accordion-item').removeClass('show-active');
    e.preventDefault();
  });
}
