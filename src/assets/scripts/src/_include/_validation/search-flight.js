var searchReturnFlight = $("#searchReturnFlight");
searchReturnFlight.validate({
  rules: {
    from_flight_search: {
      required: true
    },
    to_flight_search: {
      required: true
    },
    departure_flight_search: {
      required: true
    },
    return_flight_search: {
      required: true
    },
    passengers_flight_search: {
      required: true
    }
  },
  messages: {
    from_flight_search: {
      required: "Please select from location"
    },
    to_flight_search: {
      required: "Please select destination flight"
    },
    departure_flight_search: {
      required: "Please select departure date"
    },
    return_flight_search: {
      required: "Please select return date"
    },
    passengers_flight_search: {
      required: "Please select passengers details"
    }
  }
});

/*
searchReturnFlight.find('.spinner-input button').click(function(){
  $('#passengers_flight_search').trigger('blur');
  validateForm('#searchReturnFlight');
});
*/

searchReturnFlight.on('blur keyup change', 'input', function (event) {
  validateForm('#searchReturnFlight');
});
