//Tab Switch
$('a[data-switch]').click(function (e) {
  var selectedTab = $(this).attr('href');
  $(this).parent().find('[data-switch]').removeClass('active');
  $(this).addClass('active');
  $(this).parent().siblings('[data-panel]').removeClass('active');
  $(this).parent().siblings('[data-panel][id$=' + selectedTab.split('#')[1] + ']').addClass('active');


  $('.tt-menu .tt-dataset').find('.tt-suggestion').show();
  //$('.tab-panel input, .tab-panel .tt-input').val('').trigger('click');
  $('.tab-panel .form-field').removeClass('populated');
  $('.tab-panel input').removeAttr('data-selected');

  e.preventDefault();
});

$('a[data-switch]').click(function (e) {
  var selectedTab = $(this).attr('href');

  //var selectedTab = $('[data-switch].active').attr('href');
  function addBackDrop() {
    if (selectedTab != '') {
      if ($('[data-panel][id$=' + selectedTab.split('#')[1] + ']').hasClass('active')) {
        $('.jazeera_backdrop').addClass('active');
      } else {
        $('.jazeera_backdrop').removeClass('active');
      }
    } else {
      // $('.jazeera_backdrop').removeClass('active');
    }
  }

  if (selectedTab == '#manage-booking' || selectedTab == '#check-in' || selectedTab == '#hotels' || selectedTab == '#one-way' || selectedTab == '#multi-city') {
    addBackDrop();
  }
});

$('.jazeera_backdrop').click(function () {
  $(this).removeClass('active');
});

//Collapsing panel
$('.collapsing-panel .panel-head h6').prepend('<i class="icomoon icon-toggle"></i> ');
$('.collapsing-panel .panel-head').click(function (e) {
  $('.panel-details').slideUp();
  $(this).next('.panel-details').slideDown();
  e.preventDefault();
});

//Mobile Collapse Panel
$('a[data-collapse]').click(function (e) {
  $(this).siblings('[data-collapse]').removeClass('active');
  $(this).toggleClass('active');
  $(this).next('.panel-data-wrapper[data-panel]').siblings('[data-panel]').removeClass('active');
  $(this).next('.panel-data-wrapper[data-panel]').toggleClass('active');
  e.preventDefault();
});

//Collapse Expand*/
$('.panel-collapse').on('show.bs.collapse', function () {
  $(this).siblings('.panel-heading').addClass('active');
});

$('.panel-collapse').on('hide.bs.collapse', function () {
  $(this).siblings('.panel-heading').removeClass('active');
});
//Collapse Expand*/

$('.accordion-wrapper .accordion-item .card-header h5.grp-label').each(function (e) {
  var titleToClone = $(this).text();
  $(this).parents('.accordion-item').find('.card-body .panel-label .title p').prepend('<span class="cloned">' + titleToClone + '</span>');
});
