$('body').append('<div class="jazeera_overlay" />');
$('body').append('<div class="jazeera_backdrop" />');

$('.form-wrap').each(function () {
  $(this).find('.form-field').last().addClass('last-field');
});

$('a[data-goto-href]').click(function (e) {
  var scrollto = $(this).attr('href');
  $('body').scrollTo(scrollto, 600);
  e.preventDefault();
});

//FloatLabel
$('.float-label-wrapper').FloatLabel();

//Match Height
$('.package-list-item .packages-body').matchHeight();

//Placeholder for IE
$('.form-control').placeholder();

// Custom Select
var minimumResultsForSearch = -1;
$('.custom-select').select2({
  minimumResultsForSearch: -1,
  'allowClear': false,
  placeholder: function () {
    $(this).data('placeholder');
  }
}).on('select2:open', function (e) {
  $('.dropdown-toggle + .dropdown-menu').removeClass('show');
});

// phoneCodeSelect
var phoneCodeSelect = $(".intl-tel-input").intlTelInput({
//autoFormat: false,
//autoHideDialCode: false,
//defaultCountry: "jp",
  nationalMode: false,
//onlyCountries: ['us', 'ch', 'ca', 'do'],
//preferredCountries: ['cn', 'jp'],
//responsiveDropdown: true
//preventInvalidNumbers: true,
  preventInvalidDialCodes: true
});

$('body.scroll-disabled').bind('touchmove', function (e) {
  e.preventDefault();
});
