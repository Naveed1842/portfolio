var searchHotelsForm = $("#searchHotelsForm");
searchHotelsForm.validate({
  rules: {
    landmark_hotel: {
      required: true,
      minlength: 2,
      maxlength: 25
    },
    checkin_hotel_search: {
      required: true
    },
    checkout_hotel_search: {
      required: true,
    }
  },
  messages: {
    landmark_hotel: {
      required: "Please enter country, city, district or landmark"
    },
    checkin_hotel_search: {
      required: "Please select Check-in date"
    },
    checkout_hotel_search: {
      required: "Please select Check-out date"
    }
  }
});

searchHotelsForm.on('blur keyup change', 'input', function (event) {
  validateForm('#searchHotelsForm');
});
