$(document).mouseup(function (e) {

  var container = $(".group-field-wrap");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    $('.range-picker-wrap').removeClass('active');
  }

  var dropdownMenu = $(".dropdown-wrap");
  if (!dropdownMenu.is(e.target) && dropdownMenu.has(e.target).length === 0) {
    dropdownMenu.removeClass('show');
  }

  var container2 = $(".form-field");
  if (!container2.is(e.target) && container2.has(e.target).length === 0) {
    $('.dropdown-menu').removeClass('show');
  }

  var headerMenu = $("header .header-inner .main-nav > li");
  if (!headerMenu.is(e.target) && headerMenu.has(e.target).length === 0) {
    $(".sub-menu").parent().removeClass('active');
  }

  var SearchPanel = $(".search-box-wrap .search-panel");
  if (!SearchPanel.is(e.target) && SearchPanel.has(e.target).length === 0) {
    $(".search-box-wrap").removeClass('active');
  }

  var ModifySearchPanel = $(".modify-search-wrap .search-panel");
  if (!ModifySearchPanel.is(e.target) && ModifySearchPanel.has(e.target).length === 0) {
    $(".modify-search-wrap").removeClass('active');
  }

  var container3 = $("header .header-inner .toggle-btns li");
  if (!container3.is(e.target) && container3.has(e.target).length === 0) {
    $(".btn-dropdown-menu").removeClass('show');
    $(".btn.btn-dropdown").removeClass('active');
    isheaderActive();
  }

});

// The cursor gets into the menu area
$('#menu').mouseenter(function () {
  bodyFreezeScroll();
});

// The cursor leaves the menu area
$('.mCustomScrollBox').mouseleave(function () {
  bodyUnfreezeScroll();
});
