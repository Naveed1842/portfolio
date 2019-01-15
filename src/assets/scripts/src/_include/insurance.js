var insuranceSelectionStatus = false;
$('#InsuranceSelectionForm input:checkbox').change(function () {

  if ($("#InsuranceSelectionForm input:checkbox:checked").length > 0) {
    insuranceSelectionStatus = true;
  } else {
    insuranceSelectionStatus = false;
  }

  if ($(this).parent().find('input').is(':checked')) {
    $(this).parents('.select-insurance-item').find('.select-insurance-popup input:checkbox').prop("checked", true);
    $(this).parents('.select-insurance-item').find('.select-insurance-inline input:checkbox').prop("checked", true);
    insuranceSelectionStatus = true;
  } else {
    $(this).parents('.select-insurance-item').find('.select-insurance-popup input:checkbox').prop("checked", false);
    $(this).parents('.select-insurance-item').find('.select-insurance-inline input:checkbox').prop("checked", false);
    insuranceSelectionStatus = false;
  }

  if (insuranceSelectionStatus == true) {
    $('.insurance-selection + .btn-wrap').find('.btn').prop("disabled", false);
    $('.popup-content .checkbox-wrap + .btn-wrap').find('.btn').prop("disabled", false);
  } else {
    $('.insurance-selection + .btn-wrap').find('.btn').prop("disabled", true);
    $('.popup-content .checkbox-wrap + .btn-wrap').find('.btn').prop("disabled", true);
  }

});

if (viewportWidth < 737) {
  $('.select-insurance-wrap .select-insurance-item .select-insurance-popup .popup-inner .scroll-panel').css('height', windowHeight);
}

function isInsurancePopupActive() {
  if ($('.select-insurance-popup').hasClass('show')) {
    bodyFreezeScroll();
    $('.jazeera_overlay').addClass('active');
  } else {
    bodyUnfreezeScroll();
    $('.jazeera_overlay').removeClass('active');
  }
}

isInsurancePopupActive();

$('.select-insurance-wrap .show-popup-btn').click(function (e) {
  $(this).parents('.select-insurance-item').find('.select-insurance-popup').addClass('show');
  isInsurancePopupActive();
  e.preventDefault();
});

$('.select-insurance-popup .popup-inner .close-btn').click(function (e) {
  $(this).parents('.select-insurance-item').find('.select-insurance-popup').removeClass('show');
  isInsurancePopupActive();
  e.preventDefault();
});


$(document).mouseup(function (e) {

  var insurance = $(".select-insurance-popup");
  if (!insurance.is(e.target) && insurance.has(e.target).length === 0) {
    insurance.removeClass('show');
    isInsurancePopupActive();
  } else {
    insurance.addClass('show');
    isInsurancePopupActive();
  }

});
