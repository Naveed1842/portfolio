var passengerInfoForm = $("#passengerInfoForm");
passengerInfoForm.validate({
  rules: {
    passengerCollapseAdult1Title: {
      required: true
    },
    passengerCollapseAdult1FirstName: {
      required: true
    },
    passengerCollapseAdult1LastName: {
      required: true,
      noSpace: true
    },
    passengerCollapseAdult1Nationality: {
      required: true
    },
    passengerCollapseAdult1FrequentflyerAirline: {
      required: true
    },
    passengerCollapseAdult1Frequentflyer: {
      required: true
    },

    passengerCollapseAdult2Title: {
      required: true
    },
    passengerCollapseAdult2FirstName: {
      required: true
    },
    passengerCollapseAdult2LastName: {
      required: true,
      noSpace: true
    },
    passengerCollapseAdult2Nationality: {
      required: true
    },
    passengerCollapseAdult2FrequentflyerAirline: {
      required: true
    },
    passengerCollapseAdult2Frequentflyer: {
      required: true
    },

    passengerCollapseChild1TravelingWith: {
      required: true
    },
    passengerCollapseChild1Title: {
      required: true
    },
    passengerCollapseChild1FirstName: {
      required: true
    },
    passengerCollapseChild1LastName: {
      required: true,
      noSpace: true
    },
    passengerCollapseChild1Nationality: {
      required: true
    },
    passengerCollapseChild1FrequentDOB: {
      required: true,
      checkValidFormat: true
    },
    passengerCollapseChild1FrequentflyerAirline: {
      required: true
    },
    passengerCollapseInfant1Frequentflyer: {
      required: true
    },

    passengerCollapseInfant1TravelingWith: {
      required: true
    },
    passengerCollapseInfant1Title: {
      required: true
    },
    passengerCollapseInfant1FirstName: {
      required: true
    },
    passengerCollapseInfant1LastName: {
      required: true,
      noSpace: true
    },
    passengerCollapseInfant1Nationality: {
      required: true
    },
    passengerCollapseInfant1FrequentDOB: {
      required: true,
      checkValidFormat: true
    },
    passengerCollapseInfant1FrequentflyerAirline: {
      required: true
    },
    passengerCollapseInfant1Frequentflyer: {
      required: true
    },

    contactDetailsPhoneCode: {
      required: true
    },
    contactDetailsPhoneNumber: {
      required: true,
      phonefield: true
    },
    contactDetailsFirstName: {
      required: true
    },
    contactDetailsEmailAddress: {
      required: true,
      email: true
    },
    contactDetailsNationality: {
      required: true
    },
    contactDetailsAutoCheckinsName: {
      namefield: true
    },
    contactDetailsAutoCheckinsPassportNumber: {
      // number: false
    },
    contactDetailsAutoCheckinsVisaNumber: {
      number: true
    },
    contactDetailsAutoCheckinsDateofExpiry: {
      checkValidFormat: true
    },
    contactDetailsAutoCheckinsDateofIssue: {
      checkValidFormat: true
    },
    contactDetailsAutoCheckinsVisaIssueDate: {
      checkValidFormat: true
    },
    contactDetailsAutoCheckinsVisaExpiryDate: {
      checkValidFormat: true
    }

  },
  messages: {
    contactDetailsAutoCheckinsName: {
      namefield: "Enter Name as indicated on your passport"
    },
    contactDetailsPhoneNumber: {
      phonefield: "Enter Valid Mobile Number"
    }
  }
});

$('#contactDetailsAutoCheckinsDateofExpiry').mask("00/00/0000");
$('#contactDetailsAutoCheckinsDateofIssue').mask("00/00/0000");
$('#contactDetailsAutoCheckinsVisaIssueDate').mask("00/00/0000");
$('#contactDetailsAutoCheckinsVisaExpiryDate').mask("00/00/0000");

passengerInfoForm.on('blur keyup change', 'input', function (event) {
  validateForm('#passengerInfoForm');
});
