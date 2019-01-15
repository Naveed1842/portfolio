$('.passenger-details.details-form-wrap .card').each(function () {

  var title = $(this).find('[data-dynamic-title]').val();
  var firstname = $(this).find('[data-dynamic-firstname]').val();
  var lastname = $(this).find('[data-dynamic-lastname]').val();

  var passerger_name = '';
  if (firstname != '' || lastname != '') {
    var passerger_name = title + ' ' + firstname + ' ' + lastname;
    $(this).find('.grp-label').empty().append(passerger_name);
  } else {
    $(this).find('.grp-label').empty().append('Enter Passenger Details:');
  }

});

function primaryContact() {
  var primaryContactName = $('.passenger-details .card-header-wrap .radio-wrap input:checked').parents('.card-header-wrap').find('.card-header .grp-label').text();
  if (primaryContactName) {
    $('.contact-details .panel-label .title h3 strong').text(primaryContactName);
  }
}

function appendChanges(selectedElem) {
  var title = selectedElem.parents('.accordion-item').find('[data-dynamic-title]').val();
  var firstname = selectedElem.parents('.accordion-item').find('[data-dynamic-firstname]').val();
  var lastname = selectedElem.parents('.accordion-item').find('[data-dynamic-lastname]').val();

  var passerger_name = '';
  if (firstname != '' || lastname != '') {
    var passerger_name = title + ' ' + firstname + ' ' + lastname;
    selectedElem.parents('.accordion-item').find('.grp-label').empty().append(passerger_name);
  } else {
    selectedElem.parents('.accordion-item').find('.grp-label').empty().append('Enter Passenger Details:');
  }

  primaryContact();

}


$('[data-dynamic-title], [data-dynamic-firstname], [data-dynamic-lastname]').keyup(function (e) {
  var selectedElem = $(this);
  appendChanges(selectedElem)
});

$('[data-dynamic-title], [data-dynamic-firstname], [data-dynamic-lastname]').change(function (e) {
  var selectedElem = $(this);
  appendChanges(selectedElem);
});


$('.change-primary-contact').click(function (e) {
  $('body, html').scrollTo('.passenger-details-wrap', 500);
  e.preventDefault();
});


$('.check-group input:checkbox').change(function (e) {
  if ($(this).prop("checked") == true) {
    $(this).parents('.check-group').find('.form-grp').removeClass('hidden');
  } else {
    $(this).parents('.check-group').find('.form-grp').addClass('hidden');
  }
});

$('.card-header-wrap .radio-wrap input:radio').change(function (e) {
  primaryContact();
});

primaryContact();
