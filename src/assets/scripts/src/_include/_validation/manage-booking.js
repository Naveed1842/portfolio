var manageBookingForm = $("#manageBookingForm");
manageBookingForm.validate({
  rules: {
    pnr_manage_boking: {
      required: true,
      minlength: 2,
      maxlength: 25,
      //namefield: true
    },
    email_manage_booking: {
      required: true,
      maxlength: 35,
      emailValidate: true
    }
  },
  messages: {
    pnr_manage_boking: {
      required: "Please enter PNR Number"
    },
    email_manage_booking: {
      required: "Please enter Email / Last Name"
    }
  }
});

manageBookingForm.on('blur keyup change', 'input', function (event) {
  validateForm('#manageBookingForm');
});
