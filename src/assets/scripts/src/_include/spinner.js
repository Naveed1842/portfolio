$("[data-trigger='spinner']")
  .spinner('delay', 0) //delay in ms
  .spinner('changed', function (e, newVal, oldVal) {
    var passengersList = [];
    $($(this).parents('.dropdown-menu').find('.dropdown-option')).each(function (i) {
      var dataLabel = $(this).find('.spinner-wrap').attr('data-label');
      var dataValue = $(this).find('.spinner-wrap input').val();
      if (dataValue != 0) {
        passengersList.push([dataValue + ' ' + dataLabel]);
        $(this).find('.spinner-wrap input').addClass('active');
      } else {
        $(this).find('.spinner-wrap input').removeClass('active');
      }
      $(this).parents('.form-field').find('.form-control').parent().addClass('populated');
      $(this).parents('.form-field').find('.form-control').val(passengersList.join(", "));
      $(this).parents('.form-field').find('.form-control').trigger('change');
      $(this).parents('.form-field').find('.form-control').trigger('keyup');
    });
  });
