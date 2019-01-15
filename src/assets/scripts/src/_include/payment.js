$('.add-ons-status-holder .summary-dropdown-wrap').click(function (e) {
  $(this).parents('.add-ons-status-info-panel').siblings().removeClass('show');
  $(this).parents('.add-ons-status-info-panel').toggleClass('show');
  e.preventDefault();
});

function sysnTabs(selectedTab) {
  $('.payment-methods-tabs .panel-switch input:radio').prop('checked', false);
  $('.payment-methods-tabs .panel-switch input:radio#' + selectedTab).prop('checked', true);
}

function sysnMobileTabs(selectedTab) {
  $('.payment-wrap .mobile-panel-switch input:radio').prop('checked', false);
  $('.payment-wrap .mobile-panel-switch input:radio#' + selectedTab + "Mobile").prop('checked', true);
}

function activateTab() {
  var selectedTab = $('.payment-methods-tabs .panel-switch input:radio:checked').attr('id');
  $('section.payment-wrap form').removeClass('show');
  $('section.payment-wrap form[id="' + selectedTab + 'Form"]').addClass('show');
  sysnMobileTabs(selectedTab);
}

function activateMobileTab() {
  var selectedTab = $('.payment-wrap .mobile-panel-switch input:radio:checked').attr('id');
  $('section.payment-wrap form').removeClass('show');
  $('section.payment-wrap form[id="' + selectedTab.split('Mobile')[0] + 'Form"]').addClass('show');
  sysnTabs(selectedTab.split('Mobile')[0]);
}

$('.payment-methods-tabs .panel-switch input:radio').change(function (e) {
  activateTab();
  e.preventDefault();
});

$('.payment-wrap .mobile-panel-switch input:radio').change(function (e) {
  activateMobileTab();
  e.preventDefault();
});

activateTab();
