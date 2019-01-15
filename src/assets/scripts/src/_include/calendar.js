var departure_calender = $('#calendar-departure');
var return_calender = $('#calendar-return');

/*Departure Selector*/
departure_calender.fullCalendar({

  header: {
    left: '',
    center: '',
    right: ''
  },
  prev: '.left-single-arrow',
  next: '.right-single-arrow',

  height: 94,
  contentHeight: 'auto',

  fixedWeekCount: false,
  weekMode: 'liquid',

  //defaultDate: '2018-11-12',
  defaultView: 'month',
  navLinks: true, // can click day/week names to navigate views
  editable: true,

  selectable: true,
  selectHelper: false,
  selectAllow: function (selectInfo) {
    return moment().diff(selectInfo.start) <= 0
  },

  navLinks: false,
  themeSystem: 'standard',
  inline: true,

  select: function (dateText, inst) {

    var selectedDate = new Date(dateText);
    var selectedNextDate = moment(selectedDate, "YYYY-MM-DD").add(1, 'days');
    return_calender.fullCalendar('gotoDate', selectedNextDate);

    $('.flexible-dates-picker.return .fc-month-view table td').each(function (e) {
      if ($(this).data('date') > moment(selectedDate).format('YYYY-MM-DD')) {
        $(this).removeClass('inactive');
      } else {
        $(this).addClass('inactive');
      }
    });


  },

  dayRender: function (date, cell) {

    var moment = departure_calender.fullCalendar('getDate');
    var currentMonth = moment.format('MMM');

    if (date.format('DD') == 1 || date.format('DD') == 12) {
      cell.html('<div class="date-cell-wrap"><div class="hightlight bg-info">Recommended</div>' + '<div class="date">' + date.format('MMM DD') + '</div>' + '<div class="price">INR <strong>8,329.00</strong> </div> </div>');
    } else {
      cell.html('<div class="date-cell-wrap"><div class="date">' + date.format('MMM DD') + '</div>' + '<div class="price">INR <strong>8,329.00</strong> </div> </div>');
    }

  },

  dayClick: function (date, allDay, jsEvent, view) {
    $(this).parents('.flexible-dates-picker').find(".fc-cell-selected").removeClass("fc-cell-selected");
    $(this).addClass('fc-cell-selected');
  },

  viewRender: function (view, element) {

    var intervalStart = view.intervalStart;
    var currentMonth = intervalStart.format('YYYY-MM-DD');

    var lastMonthStart = moment(currentMonth).subtract(1, 'months').format('DD MMM');
    var lastMonthEnd = moment(currentMonth).subtract(1, 'months').endOf('month').format('DD MMM');

    var nextMonthStart = moment(currentMonth).add(1, 'months').format('DD MMM');
    var nextMonthEnd = moment(currentMonth).add(1, 'months').endOf('month').format('DD MMM');

    departure_calender.parents('.date-picker-wrap').find('.calender-switcher .calender-switch-btn.left .dates-btwn').empty().append('<strong>' + lastMonthStart + '</strong> to <strong>' + lastMonthEnd + '</strong>');
    departure_calender.parents('.date-picker-wrap').find('.calender-switcher .calender-switch-btn.right .dates-btwn').empty().append('<strong>' + nextMonthStart + '</strong> to <strong>' + nextMonthEnd + '</strong>');

  }

});

$('#calendar-departure-prev').click(function (e) {
  departure_calender.fullCalendar('prev');
  e.preventDefault();
});

$('#calendar-departure-next').click(function (e) {
  departure_calender.fullCalendar('next');
  e.preventDefault();
});


/*Returing Selector*/
return_calender.fullCalendar({

  header: {
    left: '',
    center: '',
    right: ''
  },
  prev: '.left-single-arrow',
  next: '.right-single-arrow',

  height: 94,
  contentHeight: 'auto',

  fixedWeekCount: false,
  weekMode: 'liquid',

  //defaultDate: '2018-12-12',
  defaultView: 'month',
  navLinks: true, // can click day/week names to navigate views
  editable: true,

  selectable: true,
  selectHelper: false,
  selectAllow: function (selectInfo) {
    return moment().diff(selectInfo.start) <= 0
  },

  navLinks: false,
  themeSystem: 'standard',
  inline: true,

  select: function (dateText, inst) {
    var selectedDate = new Date(dateText);
    // console.log(selectedDate);
  },

  dayRender: function (date, cell) {

    var moment = return_calender.fullCalendar('getDate');
    var currentMonth = moment.format('MMM');

    if (date.format('DD') == 1 || date.format('DD') == 12) {
      cell.html('<div class="date-cell-wrap"><div class="hightlight bg-info">Recommended</div>' + '<div class="date">' + date.format('MMM DD') + '</div>' + '<div class="price">INR <strong>8,329.00</strong> </div> </div>');
    } else {
      cell.html('<div class="date-cell-wrap"><div class="date">' + date.format('MMM DD') + '</div>' + '<div class="price">INR <strong>8,329.00</strong> </div> </div>');
    }

  },

  dayClick: function (date, allDay, jsEvent, view) {
    $(this).parents('.flexible-dates-picker').find(".fc-cell-selected").removeClass("fc-cell-selected");
    $(this).addClass('fc-cell-selected');
  },

  viewRender: function (view, element) {

    var intervalStart = view.intervalStart;
    var currentMonth = intervalStart.format('YYYY-MM-DD');

    var lastMonthStart = moment(currentMonth).subtract(1, 'months').format('DD MMM');
    var lastMonthEnd = moment(currentMonth).subtract(1, 'months').endOf('month').format('DD MMM');

    var nextMonthStart = moment(currentMonth).add(1, 'months').format('DD MMM');
    var nextMonthEnd = moment(currentMonth).add(1, 'months').endOf('month').format('DD MMM');

    return_calender.parents('.date-picker-wrap').find('.calender-switcher .calender-switch-btn.left .dates-btwn').empty().append('<strong>' + lastMonthStart + '</strong> to <strong>' + lastMonthEnd + '</strong>');
    return_calender.parents('.date-picker-wrap').find('.calender-switcher .calender-switch-btn.right .dates-btwn').empty().append('<strong>' + nextMonthStart + '</strong> to <strong>' + nextMonthEnd + '</strong>');

  }

});

$('#calendar-return-prev').click(function (e) {
  return_calender.fullCalendar('prev');
  e.preventDefault();
});

$('#calendar-return-next').click(function (e) {
  return_calender.fullCalendar('next');
  e.preventDefault();
});

$('.flexible-dates-picker.return .fc-month-view table td').on('click', function (e) {
  e.preventDefault();
});
