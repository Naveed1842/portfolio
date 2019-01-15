/*language switcher*/
var country = '';
var airportList = [];
$.getJSON("assets/json/countries.json", function (data) {
  for (var i = 0, len = data.length; i < len; i++) {
    var country = '<div class="dropdown-option"><div class="country"><div class="flag"><i class="flag-icon flag-icon-' + data[i].alpha2 + '"></i></div><div class="country-label">' + data[i].name + '</div></div><div class="languages"><a href="#" data-code="' + data[i].alpha3 + '" data-lang="en">English</a><a href="#" data-code="' + data[i].alpha3 + '" data-lang="ar">عربي</a></div></div>';
    airportList.push(country);
  }
  $('#language-switcher').append(airportList);
});

$('body').on('click', '.dropdown-option .languages a', function (e) {
  var selCode = $(this).attr('data-code');
  var selLang = $(this).attr('data-lang');
  $('.btn-dropdown .country-code').empty().append(selCode);
  $('.btn-dropdown .language-code').empty().append(selLang);
  $('.toggle-btns li .btn-dropdown-menu').removeClass('show');
  isheaderActive();
  e.preventDefault();
});
/*language switcher*/
