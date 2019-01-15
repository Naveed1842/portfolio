//CreditCardForm Validation
var CreditCardForm = $("#CreditCardForm");
CreditCardForm.validate({
  rules: {
    creditCardStreetAddress: {
      required: true,
      minlength: 2,
      maxlength: 250
    },
    creditCardTownCity: {
      required: true,
      maxlength: 35
    },
    creditCardCountry: {
      required: true
    },
    creditCardZip: {
      required: true
    },
    creditCardNumber: {
      required: true,
      //number: true,
    },
    creditCardHolderName: {
      required: true,
      namefield: true
    },
    creditCardHolderCountry: {
      required: true
    },
    creditCardHolderRelationship: {
      required: true
    },
    creditCardExpiration: {
      required: true,
      monthYear: true,
      monthLimit: true,
      yearLimit: true,
    },
    creditCardCVV: {
      required: true,
      number: true,
      minlength: 2,
      maxlength: 4
    }
  },
  messages: {
    creditCardStreetAddress: {
      required: "Please enter Street Address"
    },
    creditCardTownCity: {
      required: "Please enter Town or City"
    },
    creditCardCountry: {
      required: "Please enter Country / Region"
    },
    creditCardZip: {
      required: "Please enter Zip / Postal"
    },
    creditCardNumber: {
      required: "Please enter Card Number"
    },
    creditCardHolderName: {
      required: "Please enter Card Holder Name",
      namefield: "Enter Name as indicated on your Card"
    },
    creditCardHolderCountry: {
      required: "Please enter Card Holder Country"
    },
    creditCardHolderRelationship: {
      required: "Enter Card holder relationship to Traveler"
    },
    creditCardExpiration: {
      required: "Please enter Expiration Date"
    },
    creditCardCVV: {
      required: "Please enter CVV"
    }
  }
});

CreditCardForm.on('blur keyup change', 'input', function (event) {
  validateForm('#CreditCardForm');
});

//Field Formats
$('#creditCardNumber').mask("0000 0000 0000 0000");
$('#creditCardExpiration').mask("00/00");
$('#creditCardCVV').mask("0000");

//VoucherForm Valifation
var VoucherForm = $("#VoucherForm");
VoucherForm.validate({
  rules: {
    Vouchernumber: {
      required: true,
      minlength: 2,
      maxlength: 250,
      number: true,
    }
  },
  messages: {
    Vouchernumber: {
      required: "Please enter Voucher number"
    }
  }
});

VoucherForm.on('blur keyup change', 'input', function (event) {
  validateForm('#VoucherForm');
});
