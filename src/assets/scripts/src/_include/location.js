function checkValid() {

  var isValid = false;
  $('#multi-city .form-row.active:last').find('input.single-date-picker, input.tt-input').each(function () {
    if ($.trim($(this).val()) != '') {
      isValid = true;
    } else {
      isValid = false;
    }
  });

  // console.log(isValid);

  if (isValid == true) {

    //$('#multi-city .form-row.row + .hidden-field-group .form-row:first').addClass('active');
    //$('.form-row.row + .hidden-field-group .form-row:not(.active):first').addClass('active');
    $('#addFlight').removeClass('disabled');

  } else {
    //$('#multi-city .hidden-field-group .form-row:not(.active)').removeClass('active');
    //$('.form-row.row + .hidden-field-group .form-row:not(.active):first').removeClass('active');
    $('#addFlight').addClass('disabled');
  }

  return isValid;

  $('#addFlight').trigger('click');

}

$('#addFlight').click(function (e) {
  $('#multi-city .form-row:not(.active):first').addClass('active');
  $(this).addClass('disabled');
  e.preventDefault();
});

var isRowfilled = false;

function checkFlightLocationInputStatus() {

  $('.location-select').trigger('change');

  if ($('#from_flight_search').val() != '' && $('#to_flight_search').val() != '') {
    isRowfilled = true;
  } else {
    isRowfilled = false;
  }

  if (isRowfilled == true) {
    $('#from_flight_search').parents('.form-row').next('.form-row').removeClass('hidden');
    $('.switchLocations').addClass('active');
    $('.jazeera_backdrop').addClass('active');
  } else {
    $('#from_flight_search').parents('.form-row').next('.form-row').addClass('hidden');
    $('.switchLocations').removeClass('active');
    $('.jazeera_backdrop').removeClass('active');
  }

  checkValid();

}

/*
$(document).on("click", "*, .date-picker-wrapper", function(){
  checkFlightLocationInputStatus();
});

$('.range-picker').on('click', '*', function(){
  checkFlightLocationInputStatus();
});
*/

var Airports = new Bloodhound({
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name', 'country', 'code'),
  identify: function (obj) {
    return obj.code;
  },
  prefetch: 'assets/json/airports.json'
});


function suggestionsWithDefaultsCurrentLocation(q, sync, async) {
  if (q === '') {

    sync(Airports.get('DXB', 'SHJ'));

    /*
    var defaultList = [];
    $.getJSON( "assets/json/airports.json", function( data ) {
      $.each(data, function( index, value ) {
        var attr = $('#from_flight_search').attr('data-selected');
        if (typeof attr !== typeof undefined && attr !== false && attr != data[index].code){
          defaultList.push(data[index]);
          console.log(data[index]);
        } else {
          defaultList.push(data[0]);
        }
      });
    });
    */

  }
}

function suggestionsWithDefaultsAirports(q, sync, async) {
  if (q === '') {
    Airports.search('a', sync);
  } else {
    Airports.search(q, sync);
  }
}

$('.location-select').typeahead({
    minLength: 0,
    highlight: true,
    autoSelect: true,
    showHintOnFocus: true,
    showDefault: true,
    //displayKey: 'name','country', 'code',
    //async: true,
    classNames: {
      open: 'is-open',
      empty: 'is-empty',
      cursor: 'is-active',
      suggestion: 'Typeahead-suggestion',
      selectable: 'Typeahead-selectable'
    }
  },
  {
    name: 'current-location',
    display: function (item) {
      return item.name + ' (' + item.code + '), ' + item.country
    },
    source: suggestionsWithDefaultsCurrentLocation,
    limit: 2,
    templates: {
      header: '<h5 class="league-name">Current location</h5>',
      empty: [''],
      pending: [''],
      suggestion: Handlebars.compile('<div class="tt-suggestion" data-code="{{code}}"> <div class="flag-wrap"> <i class="flag-icon flag-icon-{{flag}}"></i></div>   <div class="suggetion-title"> <div class="country-title">{{name}}</div> <div class="country-sub-title">{{country}}</div></div> <span class="flight-code">{{code}}</span> </div>')
    }
  },
  {
    name: 'airports-list',
    display: function (item) {
      return item.name + ' (' + item.code + '), ' + item.country
    },
    source: suggestionsWithDefaultsAirports,
    limit: 10,
    templates: {
      header: '<h5 class="league-name">All locations</h5>',
      //pending: ['<div class="empty-message">Loading...</div>'],
      empty: [''],
      //empty: ['<div class="empty-message">No results</div>'],
      suggestion: Handlebars.compile('<div class="tt-suggestion" data-code="{{code}}"> <div class="flag-wrap"> <i class="flag-icon flag-icon-{{flag}}"></i></div>   <div class="suggetion-title"> <div class="country-title">{{name}}</div> <div class="country-sub-title">{{country}}</div></div> <span class="flight-code">{{code}}</span> </div>')
    }
  }).on('typeahead:selected', function (obj, datum) {

  var nextTabIndex = obj.currentTarget.tabIndex + 1;

  $('#' + obj.target.id).attr('data-selected', datum.code);

  if ($(this).parents('.form-wrap').find('input[tabindex="' + nextTabIndex + '"]').val() == '') {
    $(this).parents('.form-wrap').find('input[tabindex="' + nextTabIndex + '"]').focus().parents('.locations').addClass('show-popup');
  }

  if ($(this).parents('.sub-panel-data').find('input[tabindex="' + nextTabIndex + '"]').hasClass('datepicker')) {
    $('input[tabindex="' + nextTabIndex + '"]').parents('.group-field-wrap').find('.range-picker-wrap').toggleClass('active');
    $('input[tabindex="' + nextTabIndex + '"]').parents('.daterangepicker-group').addClass('show-popup');
  }

  checkFlightLocationInputStatus();
  $(this).parents('.locations').removeClass('show-popup');

  if ($(this).parents('.form-wrap').find('input[tabindex="' + nextTabIndex + '"]').hasClass('single-date-picker')) {

    /*
    if( $(this).parents().hasClass('hidden-field-group') ){
      $(this).parents('.form-wrap').find('input[tabindex="'+nextTabIndex+'"]').focus().trigger('click');
      console.log('only hidden');
    }
    */

    $(this).parents('.form-wrap').find('input[tabindex="' + nextTabIndex + '"]').parents('.daterangepicker-single').find('.range-picker-wrap').addClass('active');
    $(this).parents('.form-wrap').find('input[tabindex="' + nextTabIndex + '"]').parents('.daterangepicker-single').addClass('show-popup');

  }

}).on('click', function () {

  $('.dropdown-toggle + .dropdown-menu').removeClass('show');
  $('.range-picker-wrap').removeClass('active');
  $(this).parents('.locations').addClass('show-popup');

}).on('typeahead:render', function () {

  $('.tt-menu .tt-dataset').find('.tt-suggestion').show();

  if ($('.tt-menu.is-open .tt-dataset').find('.tt-suggestion').length == 1) {
    $('.tt-menu, .twitter-typeahead pre').addClass('hide');
  } else {
    $('.tt-menu, .twitter-typeahead pre').removeClass('hide');
  }

  var from_flight_search_attr = $('#from_flight_search').attr('data-selected');
  if (typeof from_flight_search_attr !== typeof undefined && from_flight_search_attr !== false) {
    $('.tt-menu .tt-dataset').find('.tt-suggestion[data-code="' + from_flight_search_attr + '"]').hide();
  }

  var to_flight_search_attr = $('#to_flight_search').attr('data-selected');
  if (typeof to_flight_search_attr !== typeof undefined && to_flight_search_attr !== false) {
    $('.tt-menu .tt-dataset').find('.tt-suggestion[data-code="' + to_flight_search_attr + '"]').hide();
  }

  var from_flight_search_oneway_attr = $('#from_flight_search_oneway').attr('data-selected');
  if (typeof from_flight_search_oneway_attr !== typeof undefined && from_flight_search_oneway_attr !== false) {
    $('.tt-menu .tt-dataset').find('.tt-suggestion[data-code="' + from_flight_search_oneway_attr + '"]').hide();
  }

  var to_flight_search_oneway_attr = $('#to_flight_search_oneway').attr('data-selected');
  if (typeof to_flight_search_oneway_attr !== typeof undefined && to_flight_search_oneway_attr !== false) {
    $('.tt-menu .tt-dataset').find('.tt-suggestion[data-code="' + to_flight_search_oneway_attr + '"]').hide();
  }


  /* var from_flight_search_muticity1 = $('#from_flight_search_muticity1').attr('data-selected');
  if (typeof from_flight_search_muticity1 !== typeof undefined && from_flight_search_muticity1 !== false) {
    $('.tt-menu .tt-dataset').find('.tt-suggestion[data-code="'+from_flight_search_muticity1+'"]').hide();
  }

  var to_flight_search_muticity1 = $('#to_flight_search_muticity1').attr('data-selected');
  if (typeof to_flight_search_muticity1 !== typeof undefined && to_flight_search_muticity1 !== false) {
    $('.tt-menu .tt-dataset').find('.tt-suggestion[data-code="'+to_flight_search_muticity1+'"]').hide();
  } */

  removeSuggetions('from_flight_search_muticity1');
  removeSuggetions('to_flight_search_muticity1');
  removeSuggetions('from_flight_search_muticity2');
  removeSuggetions('to_flight_search_muticity2');
  removeSuggetions('from_flight_search_muticity3');
  removeSuggetions('to_flight_search_muticity3');
  removeSuggetions('from_flight_search_muticity4');
  removeSuggetions('to_flight_search_muticity4');
  removeSuggetions('from_flight_search_muticity5');
  removeSuggetions('to_flight_search_muticity5');
  removeSuggetions('from_flight_search_muticity6');
  removeSuggetions('to_flight_search_muticity6');
  removeSuggetions('from_flight_search_muticity7');
  removeSuggetions('to_flight_search_muticity7');
  removeSuggetions('from_flight_search_muticity8');
  removeSuggetions('to_flight_search_muticity8');
  removeSuggetions('from_flight_search_muticity9');
  removeSuggetions('to_flight_search_muticity9');
  removeSuggetions('from_flight_search_muticity10');
  removeSuggetions('to_flight_search_muticity10');

});

function removeSuggetions(elem) {
  var elem = $('#' + elem).attr('data-selected');
  if (typeof elem !== typeof undefined && elem !== false) {
    $('.tt-menu .tt-dataset').find('.tt-suggestion[data-code="' + elem + '"]').hide();
  }
}
