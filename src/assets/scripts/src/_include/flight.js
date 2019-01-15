$('.flight-info-wrap.departure .packages-footer a.btn').click(function (e) {
  $('.flight-info-wrap.departure').addClass('hide');

  if ($('.flight-summary-main-wrap.return').hasClass('show')) {
    $('.flight-summary-main-wrap.departure').removeClass('show');
  } else {
    $('.flight-summary-main-wrap.departure').addClass('show');
  }

  $('body').scrollTo('section.flight-summary-main-wrap.departure', 0);

  setTimeout(function () {
    $('.flight-summary-main-wrap.departure a[data-goto-href]').trigger('click');
  }, 2000);

  e.preventDefault();
});

$('.flight-info-wrap.return .packages-footer a.btn').click(function (e) {
  $('.flight-info-wrap.departure').addClass('hide');
  $('.flight-summary-main-wrap.departure').removeClass('show');
  $('.flight-info-wrap.return').addClass('hide');
  $('.flight-summary-main-wrap.return').addClass('show');
  e.preventDefault();
});

//$('.switch-flight-info-wrap .date-range-list .date-tab-wrap').click(function(){
$(document).on("click", ".switch-flight-info-wrap .date-range-list .date-tab-wrap", function () {
  $(this).siblings().removeClass('selected');
  $(this).addClass('selected');
});

$('.selected-flight-item .modify-flight a').click(function (e) {
  var modify_flight = $(this).attr('href');
  if (modify_flight == '#departing_flight') {
    $('.flight-info-wrap.departure').removeClass('hide');
    $('.flight-summary-main-wrap.departure').removeClass('show');
  }
  if (modify_flight == '#return_flight') {
    $('.flight-info-wrap.return').removeClass('hide');
    $('.flight-summary-main-wrap.return').removeClass('show');
  }
  e.preventDefault();
});

$('.flight-search-result-item .view-detail-btn').click(function (e) {
  $(this).parents('.flight-search-result-item').siblings().find('.flight-info-container .expanded').removeClass('active');
  $(this).parents('.flight-search-result-item').siblings().find('.flight-info-container .collapsed').addClass('active');
  $(this).parents('.flight-search-result-item').find('.flight-info-container .collapsed').toggleClass('active')
  $(this).parents('.flight-search-result-item').find('.flight-info-container .expanded').toggleClass('active')
  e.preventDefault();
});

/*
$('.form-field .icon').click(function(){
  $(this).parents('.form-field').find('input').trigger('click');
});
*/


$('.flight-class-item .expand-arrow').click(function (e) {

  $(this).parents('.flight-search-result-item').siblings().find('.expand-arrow').removeClass('active');
  $(this).parents('.flight-search-result-item').siblings().find('.flight-class-additional-wrap').removeClass('active');

  var currentExp = $(this).attr('data-class');
  if (currentExp == 'economy-class') {
    $(this).toggleClass('active');
    $(this).parents('.flight-search-result-item').find('.expand-arrow[data-class="business-class"]').removeClass('active');
    $(this).parents('.flight-search-result-item').find('.flight-class-additional-wrap.economy-class').toggleClass('active');
    $(this).parents('.flight-search-result-item').find('.flight-class-additional-wrap.business-class').removeClass('active');
  }

  if (currentExp == 'business-class') {
    $(this).toggleClass('active');
    $(this).parents('.flight-search-result-item').find('.expand-arrow[data-class="economy-class"]').removeClass('active');
    $(this).parents('.flight-search-result-item').find('.flight-class-additional-wrap.business-class').toggleClass('active');
    $(this).parents('.flight-search-result-item').find('.flight-class-additional-wrap.economy-class').removeClass('active');
  }

  e.preventDefault();
});


//Mobile
$('.flight-class-item').click(function (e) {
  if (viewportWidth < 992) {
    $(this).parents('.flight-search-result-item').siblings().removeClass('show-popup');
    $(this).parents('.flight-search-result-item').siblings().find('.flight-class-item').removeClass('active');
    $(this).parents('.flight-search-result-item').siblings().find('.flight-class-additional-wrap').removeClass('active');
    bodyFreezeScroll();
    var currentExp = $(this).find('.expand-arrow').attr('data-class');
    if (currentExp == 'economy-class') {
      $(this).addClass('active');
      $(this).parents('.flight-search-result-item').siblings().removeClass('show-popup');
      $(this).parents('.flight-search-result-item').addClass('show-popup');
      $(this).parents('.flight-search-result-item').find('.expand-arrow[data-class="business-class"]').parent('.flight-class-item').removeClass('active');
      $(this).parents('.flight-search-result-item').find('.flight-class-additional-wrap.economy-class').addClass('active');
      $(this).parents('.flight-search-result-item').find('.flight-class-additional-wrap.business-class').removeClass('active');
    }

    if (currentExp == 'business-class') {
      $(this).addClass('active');
      $(this).parents('.flight-search-result-item').siblings().removeClass('show-popup');
      $(this).parents('.flight-search-result-item').addClass('show-popup');
      $(this).parents('.flight-search-result-item').find('.expand-arrow[data-class="economy-class"]').parent('.flight-class-item').removeClass('active');
      $(this).parents('.flight-search-result-item').find('.flight-class-additional-wrap.business-class').addClass('active');
      $(this).parents('.flight-search-result-item').find('.flight-class-additional-wrap.economy-class').removeClass('active');
    }

  }
  e.preventDefault();
});

if ($('.expand-arrow.active').length == 1) {
  if (viewportWidth < 992) {
    $('.expand-arrow.active').parents('.flight-class-item').trigger('click');
  }
}

/*Dates tabs*/
var flightDates = [
  {
    'recommend': false,
    'cost': '<div class="cost-info"> <div class="cost-label">From</div> <div class="cost"> INR <strong>5,898.00 </div></div>',
  },
  {
    'recommend': false,
    'cost': '<div class="cost-info"> <div class="cost-label">From</div> <div class="cost"> INR <strong>5,238.00 </div></div>',
  },
  {
    'recommend': false,
    'cost': '<div class="cost-info"> <div class="cost-label">From</div> <div class="cost"> INR <strong>5,768.00 </div></div>',
  },
  {
    'recommend': false,
    'cost': '<div class="cost-info"> <div class="cost-label">From</div> <div class="cost"> INR <strong>5,498.00 </div></div>',
  },
  {
    'recommend': true,
    'cost': '<div class="cost-info"> <div class="cost-label">From</div> <div class="cost"> INR <strong>3,898.00 </div></div>',
  },
  {
    'recommend': false,
    'cost': '<div class="cost-info"> <div class="cost-label">From</div> <div class="cost"> INR <strong>7,898.00 </div></div>',
  },
  {
    'recommend': false,
    'cost': '',
  }
];

var dataDates = [];
var datesArr = [];

function prepareDate(lastWeek, nextWeek, load, isDesktop) {

  if (isDesktop) {

    var out = '';
    for (var i = 1; i < 8; i++) {

      var item = flightDates[Math.floor(Math.random() * flightDates.length)];

      out = '';
      if (item.recommend) {
        out += '<div class="hightlight bg-success">Lowest Fair</div>';
      }

      out += '<div class="date"><strong>' + moment(datesArr[i - 1], 'DD-MM-YYYY').format("DD MMM") + ',</strong> ' + moment(datesArr[i - 1], 'DD-MM-YYYY').format("ddd") + '</div>';
      ;

      if (item.cost != '') {
        out += item.cost;
      } else {
        out += '<div class="msg">No Flights <br>Available</div>';
      }

      if (load == 'initLoad') {
        if (i == 4) {
          dataDates.push('<div class="date-tab-wrap selected"> ' + out + ' </div>');
        } else {
          if (item.cost != '') {
            dataDates.push('<div class="date-tab-wrap"> ' + out + ' </div>');
          } else {
            dataDates.push('<div class="date-tab-wrap inactive"> ' + out + ' </div>');
          }
        }
      } else {

        if (i == 1) {
          dataDates.push('<div class="date-tab-wrap selected"> ' + out + ' </div>');
        } else {
          if (item.cost != '') {
            dataDates.push('<div class="date-tab-wrap"> ' + out + ' </div>');
          } else {
            dataDates.push('<div class="date-tab-wrap inactive"> ' + out + ' </div>');
          }
        }

      }

    }

    $('.dynamic-dates').empty().append(dataDates);

    $('.flight-info-wrap.action .select-date-range.prev-date-range').empty().html('<div class="hidden-date">' + moment(lastWeek, 'DD-MM-YYYY').subtract(1, 'days').format('DD-MM-YYYY') + '</div> ' + '<strong>' + moment(lastWeek, 'DD-MM-YYYY').subtract(7, 'days').format('DD MMM') + '</strong> to <strong>' + moment(lastWeek, 'DD-MM-YYYY').subtract(1, 'days').format('DD MMM') + '</strong>');
    $('.flight-info-wrap.action .select-date-range.next-date-range').empty().html('<div class="hidden-date">' + moment(nextWeek, 'DD-MM-YYYY').add(1, 'days').format('DD-MM-YYYY') + '</div> ' + '<strong>' + moment(nextWeek, 'DD-MM-YYYY').add(1, 'days').format('DD MMM') + '</strong> to <strong>' + moment(nextWeek, 'DD-MM-YYYY').add(7, 'days').format('DD MMM') + '</strong>');

  } else {

    var out = '';
    for (var i = 1; i < 4; i++) {

      var item = flightDates[Math.floor(Math.random() * flightDates.length)];

      out = '';
      if (item.recommend) {
        out += '<div class="hightlight bg-success">Lowest Fair</div>';
      }

      out += '<div class="date"><strong>' + moment(datesArr[i - 1], 'DD-MM-YYYY').format("DD MMM") + ',</strong> ' + moment(datesArr[i - 1], 'DD-MM-YYYY').format("ddd") + '</div>';
      ;

      if (item.cost != '') {
        out += item.cost;
      } else {
        out += '<div class="msg">No Flights <br>Available</div>';
      }

      if (load == 'initLoad') {
        if (i == 2) {
          dataDates.push('<div class="date-tab-wrap selected"> ' + out + ' </div>');
        } else {
          if (item.cost != '') {
            dataDates.push('<div class="date-tab-wrap"> ' + out + ' </div>');
          } else {
            dataDates.push('<div class="date-tab-wrap inactive"> ' + out + ' </div>');
          }
        }
      } else {

        if (i == 1) {
          dataDates.push('<div class="date-tab-wrap selected"> ' + out + ' </div>');
        } else {
          if (item.cost != '') {
            dataDates.push('<div class="date-tab-wrap"> ' + out + ' </div>');
          } else {
            dataDates.push('<div class="date-tab-wrap inactive"> ' + out + ' </div>');
          }
        }

      }

    }

    $('.dynamic-dates').empty().append(dataDates);

    $('.flight-info-wrap.action .select-date-range.prev-date-range').empty().html('<div class="hidden-date">' + lastWeek + '</div>');
    $('.flight-info-wrap.action .select-date-range.next-date-range').empty().html('<div class="hidden-date">' + nextWeek + '</div>');

  }


}

function getWeekDates(startDate, weekOf, isDesktop) {


  if (isDesktop) {

    if (startDate == moment().format('DD-MM-YYYY')) {

      datesArr = [];
      dataDates = [];

      datesArr.push(moment(startDate, 'DD-MM-YYYY').subtract(3, 'days').format('DD-MM-YYYY'));
      datesArr.push(moment(startDate, 'DD-MM-YYYY').subtract(2, 'days').format('DD-MM-YYYY'));
      datesArr.push(moment(startDate, 'DD-MM-YYYY').subtract(1, 'days').format('DD-MM-YYYY'));
      datesArr.push(moment(startDate, 'DD-MM-YYYY').add(0, 'days').format('DD-MM-YYYY'));
      datesArr.push(moment(startDate, 'DD-MM-YYYY').add(1, 'days').format('DD-MM-YYYY'));
      datesArr.push(moment(startDate, 'DD-MM-YYYY').add(2, 'days').format('DD-MM-YYYY'));
      datesArr.push(moment(startDate, 'DD-MM-YYYY').add(3, 'days').format('DD-MM-YYYY'));

      prepareDate(moment(startDate, 'DD-MM-YYYY').subtract(3, 'days').format('DD-MM-YYYY'), moment(startDate, 'DD-MM-YYYY').add(3, 'days').format('DD-MM-YYYY'), 'initLoad', true);

    } else {

      if (weekOf == 'getNextWeek') {

        datesArr = [];
        dataDates = [];

        datesArr.push(moment(startDate, 'DD-MM-YYYY').add(0, 'days').format('DD-MM-YYYY'));
        datesArr.push(moment(startDate, 'DD-MM-YYYY').add(1, 'days').format('DD-MM-YYYY'));
        datesArr.push(moment(startDate, 'DD-MM-YYYY').add(2, 'days').format('DD-MM-YYYY'));
        datesArr.push(moment(startDate, 'DD-MM-YYYY').add(3, 'days').format('DD-MM-YYYY'));
        datesArr.push(moment(startDate, 'DD-MM-YYYY').add(4, 'days').format('DD-MM-YYYY'));
        datesArr.push(moment(startDate, 'DD-MM-YYYY').add(5, 'days').format('DD-MM-YYYY'));
        datesArr.push(moment(startDate, 'DD-MM-YYYY').add(6, 'days').format('DD-MM-YYYY'));

        prepareDate(moment(startDate, 'DD-MM-YYYY').add(0, 'days').format('DD-MM-YYYY'), moment(startDate, 'DD-MM-YYYY').add(6, 'days').format('DD-MM-YYYY'), 'nextLoad', true);

      }

      if (weekOf == 'getLastWeek') {

        datesArr = [];
        dataDates = [];

        datesArr.push(moment(startDate, 'DD-MM-YYYY').subtract(6, 'days').format('DD-MM-YYYY'));
        datesArr.push(moment(startDate, 'DD-MM-YYYY').subtract(5, 'days').format('DD-MM-YYYY'));
        datesArr.push(moment(startDate, 'DD-MM-YYYY').subtract(4, 'days').format('DD-MM-YYYY'));
        datesArr.push(moment(startDate, 'DD-MM-YYYY').subtract(3, 'days').format('DD-MM-YYYY'));
        datesArr.push(moment(startDate, 'DD-MM-YYYY').subtract(2, 'days').format('DD-MM-YYYY'));
        datesArr.push(moment(startDate, 'DD-MM-YYYY').subtract(1, 'days').format('DD-MM-YYYY'));
        datesArr.push(moment(startDate, 'DD-MM-YYYY').subtract(0, 'days').format('DD-MM-YYYY'));

        prepareDate(moment(startDate, 'DD-MM-YYYY').subtract(6, 'days').format('DD-MM-YYYY'), moment(startDate, 'DD-MM-YYYY').subtract(0, 'days').format('DD-MM-YYYY'), 'prevLoad', true);

      }

    }

  } else {

    if (startDate == moment().format('DD-MM-YYYY')) {

      datesArr = [];
      dataDates = [];

      datesArr.push(moment(startDate, 'DD-MM-YYYY').subtract(1, 'days').format('DD-MM-YYYY'));
      datesArr.push(moment(startDate, 'DD-MM-YYYY').add(0, 'days').format('DD-MM-YYYY'));
      datesArr.push(moment(startDate, 'DD-MM-YYYY').add(1, 'days').format('DD-MM-YYYY'));

      prepareDate(moment(startDate, 'DD-MM-YYYY').subtract(3, 'days').format('DD-MM-YYYY'), moment(startDate, 'DD-MM-YYYY').add(3, 'days').format('DD-MM-YYYY'), 'initLoad', false);

    } else {

      if (weekOf == 'getNextWeek') {

        datesArr = [];
        dataDates = [];

        datesArr.push(moment(startDate, 'DD-MM-YYYY').subtract(1, 'days').format('DD-MM-YYYY'));
        datesArr.push(moment(startDate, 'DD-MM-YYYY').add(0, 'days').format('DD-MM-YYYY'));
        datesArr.push(moment(startDate, 'DD-MM-YYYY').add(1, 'days').format('DD-MM-YYYY'));

        prepareDate(moment(startDate, 'DD-MM-YYYY').subtract(3, 'days').format('DD-MM-YYYY'), moment(startDate, 'DD-MM-YYYY').add(3, 'days').format('DD-MM-YYYY'), 'nextLoad', false);

      }

      if (weekOf == 'getLastWeek') {

        datesArr = [];
        dataDates = [];

        datesArr.push(moment(startDate, 'DD-MM-YYYY').subtract(1, 'days').format('DD-MM-YYYY'));
        datesArr.push(moment(startDate, 'DD-MM-YYYY').add(0, 'days').format('DD-MM-YYYY'));
        datesArr.push(moment(startDate, 'DD-MM-YYYY').add(1, 'days').format('DD-MM-YYYY'));

        prepareDate(moment(startDate, 'DD-MM-YYYY').subtract(3, 'days').format('DD-MM-YYYY'), moment(startDate, 'DD-MM-YYYY').add(3, 'days').format('DD-MM-YYYY'), 'prevLoad', false);

      }

    }

  }

}

if (viewportWidth > 991) {
  getWeekDates(moment().format('DD-MM-YYYY'), '', true);
  $('.action .select-date-range.next-date-range').click(function () {
    var setdate = $(this).find('.hidden-date').html();
    getWeekDates(setdate, 'getNextWeek', true);
  });
  $('.action .select-date-range.prev-date-range').click(function () {
    var setdate = $(this).find('.hidden-date').html();
    getWeekDates(setdate, 'getLastWeek', true);
  });
} else {
  getWeekDates(moment().format('DD-MM-YYYY'), '', false);
  $('.action .select-date-range.next-date-range').click(function () {
    var setdate = $(this).find('.hidden-date').html();
    getWeekDates(setdate, 'getNextWeek', false);
  });
  $('.action .select-date-range.prev-date-range').click(function () {
    var setdate = $(this).find('.hidden-date').html();
    getWeekDates(setdate, 'getLastWeek', false);
  });
}
