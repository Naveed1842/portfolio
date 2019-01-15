// Validate Form
function validateForm(id) {
  var valid = $(id).validate().checkForm();
  if (valid) {
    $(id).find('.form-btn-wrap').removeClass('hidden');
    $(id).find('.btn-wrap .btn').removeAttr('disabled');
  } else {
    $(id).find('.form-btn-wrap').addClass('hidden');
    $(id).find('.btn-wrap .btn').attr("disabled", "true");
  }
}

$.validator.addMethod('checkValidFormat', function (value, element) {
  var stringPattern = new RegExp("(0[123456789]|10|11|12|13|14|15|16|17|18|19|20|21|22|23|24|25|26|27|28|29|30|31)([/])(0[123456789]|10|11|12)([/])([1-2][0-9][0-9][0-9])");
  if (stringPattern.test(value)) {
    return true;
  } else {
    return false;
  }
}, "Please enter valid date.");

$.validator.addMethod("namefield", function (value, element) {
  return this.optional(element) || /^[a-z\'\s]+$/i.test(value);
}, "Invalid Characters");

$.validator.addMethod("phonefield", function (value, element) {
  return this.optional(element) || /^[0-9\+\s]+$/i.test(value);
}, "Invalid phone number");

$.validator.addMethod("msgfield", function (value, element) {
  return this.optional(element) || /^[a-z\0-9\,.'"!()+@\s]+$/i.test(value);
}, "Invalid Characters");

$.validator.addMethod("monthYear", function (value, element) {
  return this.optional(element) || /^\d{2}\/\d{2}$/.test(value);
}, "Please enter MM/YY format only.");

$.validator.addMethod("noSpace", function (value, element) {
  return value.indexOf(" ") < 0 && value != "";
}, "The format doesn't seem right");

$.validator.addMethod("monthLimit", function (value, element) {
  var myRegexp = /^(\d{2})(.*?)$/;
  var match = myRegexp.exec(value);
  var bValid;
  bValid = false;
  if (match[1] > 0 && match[1] < 13) {
    bValid = true;
  }
  return this.optional(element) || bValid;
}, "Please enter month between 1 and 12");

$.validator.addMethod("yearLimit", function (value, element) {
  var myRegexp = /^(.*?)(\d{2})$/;
  var match = myRegexp.exec(value);
  var bValid;
  bValid = false;
  if (match[2] >= moment().format('YY')) {
    bValid = true;
  }
  return this.optional(element) || bValid;
}, "Please enter valid Year.");

$.validator.addMethod("emailValidate", function (value, element) {
  var myRegexp = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  var bValid;
  if (value.indexOf('@') != -1) {
    bValid = false;
    var match = myRegexp.test(value);
    if (match) {
      bValid = true;
    }
  } else {
    bValid = true;
  }
  return this.optional(element) || bValid;
}, "Please enter valid email address.");

var defaultOptions = {
  errorElement: "span",
  errorClass: "help-block",
  focusInvalid: true,
  //onkeyup: true,
  onblur: true,
  highlight: function (element, errorClass, validClass) {
    var elm = $(element);
    var group = elm.closest('.form-field');

    if (group.length) {
      group.addClass('has-error');
      group.removeClass('populated');
    }
  },
  unhighlight: function (element, errorClass, validClass) {
    var elm = $(element);
    var group = elm.closest('.form-field');

    if (group.length) {
      group.removeClass('has-error');
      group.addClass('populated');
    }
  },
  errorPlacement: function (error, element) {

    //console.log('errorPlacement... this never gets called :(', error, element);

    var elm = $(element);

    if (elm.parent('.form-field').length) {
      //error.insertAfter(elm);
      elm.parent('.form-field').prepend(error);
    }

    /*
    if (elm.parent('.input-group').length || elm.parent('.input-group-custom').length) {
        error.insertAfter(elm.parent());
    }
    else if (elm.prop('type') === 'checkbox' || elm.prop('type') === 'radio') {
        error.appendTo(elm.closest(':not(input, label, .checkbox, .radio)').first());
    } else {
        error.insertAfter(elm);
    }
    */

  },
  submitHandler: function (form) {
    console.log('Valid form submited.');
    form.submit();
  }
};

$.validator.setDefaults(defaultOptions);

@import
'_validation/manage-booking.js';
@import
'_validation/check-in.js';
@import
'_validation/hotels.js';
@import
'_validation/passenger-details.js';
@import
'_validation/payment-method.js';
@import
'_validation/search-flight.js';
