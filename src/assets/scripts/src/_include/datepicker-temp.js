function fixRangeSelection() {
  $('.date-picker-wrapper .month-wrapper table .day').parent().removeClass('first-date-selected-td');
  $('.date-picker-wrapper .month-wrapper table .day').parent().removeClass('last-date-selected-td');
  $('.date-picker-wrapper .month-wrapper table .day.nextMonth, .date-picker-wrapper .month-wrapper table .day.lastMonth').parent().addClass('invalid-date-td');
  $('.date-picker-wrapper .month-wrapper table').find('.first-date-selected').parent().addClass('first-date-selected-td');
  $('.date-picker-wrapper .month-wrapper table').find('.last-date-selected').parent().addClass('last-date-selected-td');
  //$('.date-picker-wrapper .month-wrapper table').find('.first-date-selected.lastMonth, .date-picker-wrapper .month-wrapper table').find('.first-date-selected.nextMonth').parent().removeClass('first-date-selected-td');
  $('.date-picker-wrapper .month-wrapper table').find('.first-date-selected.lastMonth').parent().removeClass('first-date-selected-td');
  $('.date-picker-wrapper .month-wrapper table').find('.last-date-selected.lastMonth').parent().removeClass('last-date-selected-td');
}

$('.datepicker-dropdown').mask("00/00/0000");

/*single-date-picker*/
if ($('.single-date-picker').length) {

  $('.single-date-picker').on("focus", function () {
    var currentId = $(this).attr('id');
    var contanerID = '#' + currentId + '_range_picker';
    var currentIdDom = '#' + currentId;

    //console.log(currentId, contanerID, currentIdDom);

    var defaultStartDate = new Date();

    if ($(this).parents().hasClass('hidden-field-group')) {
      if ($(this).parents('.form-wrap').index() != 0) {
        var previewsDateSelected = $(this).parents('.form-wrap').prev().find('.single-date-picker').val();
        defaultStartDate = previewsDateSelected;
      } else {
        var firstSelectedDate = $('.sub-panel-data#multi-city > .form-wrap').find('.single-date-picker').val();
        defaultStartDate = firstSelectedDate;
      }
    }

    //console.log(moment(defaultStartDate).format("ddd, MMM DD YYYY"));
    //console.log(currentIdDom);

    $(currentIdDom).dateRangePicker({
      format: 'ddd, MMM DD YYYY',
      inline: true,
      stickyMonths: true,
      container: contanerID,
      showTopbar: false,
      singleDate: true,
      startDate: defaultStartDate,
      hoveringTooltip: false,
      singleMonth: true,
      alwaysOpen: true,
      customArrowPrevSymbol: '<i class="icon icon-arrow-down"></i>',
      customArrowNextSymbol: '<i class="icon icon-arrow-up"></i>'
    }).bind('datepicker-change', function (evt, obj) {

      $('#' + currentId).val(obj.value);
      $(currentIdDom).parents('.group-field-wrap').find('.range-picker-wrap').removeClass('active');
      $(currentIdDom).parents('.daterangepicker-single').find('.float-label-wrapper').addClass('populated');
      $(currentIdDom).parents('.daterangepicker-single').removeClass('show-popup');
      var nextTabIndex = evt.currentTarget.tabIndex + 1;
      $(this).parents('.sub-panel-data').find('input[tabindex="' + nextTabIndex + '"]').focus();
      if ($(this).parents('.sub-panel-data').find('input[tabindex="' + nextTabIndex + '"]').hasClass('dropdown-toggle')) {
        $(this).parents('.sub-panel-data').find('input[tabindex="' + nextTabIndex + '"]').next('.dropdown-menu').toggleClass('show');
      }

      $(this).parents('.form-wrap').nextAll().find('.single-date-picker').val('');
      $(this).parents('.form-wrap').nextAll().find('.daterangepicker-single').find('.float-label-wrapper').removeClass('populated');

      checkValid();

    }).click(function (evt) {

      // $(currentIdDom).data('dateRangePicker').setStart( moment(defaultStartDate).format("ddd, MMM DD YYYY") );

      $('.dropdown-toggle + .dropdown-menu').removeClass('show');
      $(currentIdDom).parents('.daterangepicker-single').find('.range-picker-wrap').addClass('active');
      $(currentIdDom).parents('.daterangepicker-single').addClass('show-popup');

      evt.stopPropagation();

    });

    $(currentIdDom).data('dateRangePicker').setStart(moment(defaultStartDate).format("ddd, MMM DD YYYY"));

  });
}
/*single-date-picker*/


/*departure flight date picker*/
if ($('#departure_flight_search').length) {
  $('#departure_flight_search').dateRangePicker({
    format: 'ddd, MMM DD YYYY',
    inline: true,
    stickyMonths: true,
    container: '#departure_flight_date_range',
    showTopbar: false,
    singleDate: true,
    startDate: new Date(),
    hoveringTooltip: false,
    alwaysOpen: true,
    customArrowPrevSymbol: '<i class="icon icon-arrow-down"></i>',
    customArrowNextSymbol: '<i class="icon icon-arrow-up"></i>'
  }).bind('datepicker-change', function (evt, obj) {

    //Binding selected first date to field
    $('#departure_flight_search').val(obj.value);
    $('#departure_flight_search').parent('.form-field').addClass('populated');

    /*
    $(this).parents('.group-field-wrap').find('.range-picker-wrap').toggleClass('active');
    $('#return_flight_search').parents('.group-field-wrap').find('.range-picker-wrap').toggleClass('active');
    $('#return_flight_search').data('dateRangePicker').setStart(obj.value);
    $('#return_flight_search').parents('.group-field-wrap').find('.float-label-wrapper').addClass('populated');
    */

    var new_date = moment(new Date(obj.value), "ddd, MMM DD YYYY").add(7, 'days');
    var udpatedDate = moment(new_date._d).format("ddd, MMM DD YYYY");

    //$('#departure_flight_search').data('dateRangePicker').setEnd(udpatedDate);

    //$('#return_flight_search').parents('.group-field-wrap').find('.float-label-wrapper').removeClass('populated');

    // if($('#return_flight_search').val() == ''){
    $('#return_flight_search').val(udpatedDate);
    $('#return_flight_search').data('dateRangePicker').setEnd(udpatedDate);
    // }

    $('#departure_flight_search').trigger('change');

    fixRangeSelection();

  }).bind('datepicker-first-date-selected', function (evt, obj) {

    var new_date = moment(new Date(obj.date1), "ddd, MMM DD YYYY").add(7, 'days');
    var udpatedDate = moment(new_date._d).format("ddd, MMM DD YYYY");

    $('#departure_flight_search').data('dateRangePicker').setEnd(udpatedDate);

  }).click(function (evt) {
    evt.stopPropagation();
    $('.dropdown-toggle + .dropdown-menu').removeClass('show');

    if (viewportWidth > 991) {
      $(this).parents('.group-field-wrap').find('.range-picker-wrap').toggleClass('active');
    } else {
      $(this).parents('.group-field-wrap').find('.range-picker-wrap').addClass('active');
    }

    $('#return_flight_search').parents('.group-field-wrap').find('.range-picker-wrap').removeClass('active');

    $(this).parents('.daterangepicker-group').addClass('show-popup');

  });
}
/*departure flight date picker*/


/*return flight date picker*/
//var departure_formated_date = moment(new Date($('#departure_flight_search').val())).format("YYYY-MM-DD");
if ($('#return_flight_search').length) {
  $('#return_flight_search').dateRangePicker({
    format: 'ddd, MMM DD YYYY',
    inline: true,
    stickyMonths: true,
    container: '#return_flight_date_range',
    showTopbar: false,
    hoveringTooltip: false,
    alwaysOpen: true,
    //startDate: departure_formated_date,
    selectForward: true,
    customArrowPrevSymbol: '<i class="icon icon-arrow-down"></i>',
    customArrowNextSymbol: '<i class="icon icon-arrow-up"></i>'
  }).bind('datepicker-change', function (evt, obj) {

    $(this).parents('.group-field-wrap').find('.range-picker-wrap').removeClass('active');
    $('#departure_flight_search').data('dateRangePicker').setDateRange(obj.date1, obj.date2, true);

    $(this).parents('.group-field-wrap').find('.float-label-wrapper').addClass('populated');

    var departure_formated_date = moment(new Date(obj.date1)).format("ddd, MMM DD YYYY");
    var return_formated_date = moment(new Date(obj.date2)).format("ddd, MMM DD YYYY");
    $('#checkin_hotel_search').val(departure_formated_date);
    $('#checkout_hotel_search').val(return_formated_date);

    $('#departure_flight_search').val(departure_formated_date);
    $('#return_flight_search').val(return_formated_date);


    $('#passengers_flight_search').focus();
    $('#passengers_flight_search').next('.dropdown-menu').toggleClass('show');

    $('#return_flight_search').trigger('change');
    $(this).parents('.daterangepicker-group').removeClass('show-popup');

    fixRangeSelection();

  }).click(function (evt) {
    evt.stopPropagation();
    $('.dropdown-toggle + .dropdown-menu').removeClass('show');
    $('#departure_flight_search').parents('.group-field-wrap').find('.range-picker-wrap').removeClass('active');

    if (viewportWidth > 991) {
      $(this).parents('.group-field-wrap').find('.range-picker-wrap').toggleClass('active');
    } else {
      $(this).parents('.group-field-wrap').find('.range-picker-wrap').addClass('active');
    }

    var departure_formated_date = moment(new Date($('#departure_flight_search').val())).format("ddd, MMM DD YYYY");
    var return_flight_search = moment(new Date($('#return_flight_search').val())).format("ddd, MMM DD YYYY");
    if (departure_formated_date != 'Invalid date') {
      $('#return_flight_search').data('dateRangePicker').setStart(departure_formated_date);
    }

    // $('#return_flight_search').data('dateRangePicker').setEnd(return_flight_search);

    $(this).parents('.daterangepicker-group').addClass('show-popup');

  });
}
/*return flight date picker*/


/*check-in hotel date picker*/
if ($('#checkin_hotel_search').length) {
  $('#checkin_hotel_search').dateRangePicker({
    format: 'ddd, MMM DD YYYY',
    inline: true,
    stickyMonths: true,
    container: '#checkin_hotel_search_date_range',
    showTopbar: false,
    singleDate: true,
    startDate: new Date(),
    hoveringTooltip: false,
    alwaysOpen: true,
    customArrowPrevSymbol: '<i class="icon icon-arrow-down"></i>',
    customArrowNextSymbol: '<i class="icon icon-arrow-up"></i>'
  }).bind('datepicker-change', function (evt, obj) {
    $('#checkin_hotel_search').val(obj.value);
    $('#checkin_hotel_search').parent('.form-field').addClass('populated');
    $(this).parents('.group-field-wrap').find('.range-picker-wrap').toggleClass('active');
    $('#checkout_hotel_search').parents('.group-field-wrap').find('.range-picker-wrap').toggleClass('active');
    $('#checkout_hotel_search').data('dateRangePicker').setStart(obj.value);
    $('#checkout_hotel_search').parents('.group-field-wrap').find('.float-label-wrapper').addClass('populated');
    $('#checkin_hotel_search').trigger('blur');
    fixRangeSelection();
  }).click(function (evt) {
    evt.stopPropagation();
    $('.dropdown-toggle + .dropdown-menu').removeClass('show');
    if (viewportWidth > 991) {
      $(this).parents('.group-field-wrap').find('.range-picker-wrap').toggleClass('active');
    } else {
      $(this).parents('.group-field-wrap').find('.range-picker-wrap').addClass('active');
    }
    $('#checkout_hotel_search').parents('.group-field-wrap').find('.range-picker-wrap').removeClass('active');
    $(this).parents('.daterangepicker-group').addClass('show-popup');
  });
}
/*check-in hotel date picker*/


/*check-out hotel date picker*/
if ($('#checkout_hotel_search').length) {
  $('#checkout_hotel_search').dateRangePicker({
    format: 'ddd, MMM DD YYYY',
    inline: true,
    stickyMonths: true,
    container: '#checkout_hotel_search_date_range',
    showTopbar: false,
    hoveringTooltip: false,
    alwaysOpen: true,
    //startDate: departure_formated_date,
    selectForward: true,
    customArrowPrevSymbol: '<i class="icon icon-arrow-down"></i>',
    customArrowNextSymbol: '<i class="icon icon-arrow-up"></i>'
  }).bind('datepicker-change', function (evt, obj) {
    $(this).parents('.group-field-wrap').find('.range-picker-wrap').removeClass('active');
    $('#checkin_hotel_search').data('dateRangePicker').setDateRange(obj.date1, obj.date2, true);
    var departure_formated_date = moment(new Date(obj.date1)).format("ddd, MMM DD YYYY");
    var return_formated_date = moment(new Date(obj.date2)).format("ddd, MMM DD YYYY");
    $('#checkout_hotel_search').val(departure_formated_date);
    $('#checkout_hotel_search').val(return_formated_date);
    $('#checkout_hotel_search').trigger('blur');
    $(this).parents('.daterangepicker-group').removeClass('show-popup');
    fixRangeSelection();
  }).click(function (evt) {
    evt.stopPropagation();
    $('.dropdown-toggle + .dropdown-menu').removeClass('show');
    $('#checkout_hotel_search').parents('.group-field-wrap').find('.range-picker-wrap').removeClass('active');
    if (viewportWidth > 991) {
      $(this).parents('.group-field-wrap').find('.range-picker-wrap').toggleClass('active');
    } else {
      $(this).parents('.group-field-wrap').find('.range-picker-wrap').addClass('active');
    }
    var departure_formated_date = moment(new Date($('#checkin_hotel_search').val())).format("ddd, MMM DD YYYY");
    if (departure_formated_date != 'Invalid date') {
      $('#checkout_hotel_search').data('dateRangePicker').setStart(departure_formated_date);
    }
    $('#checkin_hotel_search').parents('.group-field-wrap').find('.range-picker-wrap').removeClass('active');
    $(this).parents('.daterangepicker-group').addClass('show-popup');
  });
}
/*check-out hotel date picker*/

/* daterangepicker selection fixes*/
$('.date-picker-wrapper').on('click', 'table .caption', function () {
  fixRangeSelection();
});

if (viewportWidth < 992) {
  $('.range-picker-wrap .date-picker-wrapper').css('max-height', windowHeight - 150);
}
