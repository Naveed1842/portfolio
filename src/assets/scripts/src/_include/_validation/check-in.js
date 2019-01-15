var searchcheckInForm = $("#searchcheckInForm");
searchcheckInForm.validate({
  rules: {
    pnr_checkin: {
      required: true,
      minlength: 2,
      maxlength: 25,
      //namefield: true
    },
    email_checkin: {
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

searchcheckInForm.on('blur keyup change', 'input', function (event) {
  validateForm('#searchcheckInForm');
});
