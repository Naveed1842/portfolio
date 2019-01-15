function enableWindows() {
  $('#printArea').addClass('active');
  $('.add-ons-status-info-panel').addClass('show');
}

function disableWindows(dsfsdf) {
  $('#printArea').removeClass('active');
  $('.add-ons-status-info-panel').removeClass('show');
}

function ExportPdf() {

  kendo.pdf.defineFont({
    "jazeera_regular": "assets/fonts/j9_Regular.ttf",
    "jazeera_black": "assets/fonts/j9_Black.ttf",
    "jazeera_bold": "assets/fonts/j9_Bold.ttf",
    "jazeera_light": "assets/fonts/j9_Light.ttf",
    "jazeera_medium": "assets/fonts/j9_Medium.ttf",
  });

  kendo.drawing.drawDOM("#printArea", {
    //forcePageBreak: ".result-info",
    paperSize: "A4",
    margin: {left: "0.5cm", right: "0.5cm", top: "0.5cm", bottom: "0.5cm"},
    scale: 0.7,
    height: 500,
    landscape: true,
  })
    .then(function (group) {
      kendo.drawing.pdf.saveAs(group, "Jazeera Airways - Booking Details.pdf");
      disableWindows();
    });

}

$('#saveBookingDetails').click(() => {
  enableWindows();
  ExportPdf();
});


$('#printBookingDetails').click(() => {
  $('#printArea').printThis({
    importCSS: true,
    loadCSS: "",
    header: "",
    beforePrint: enableWindows(),
    afterPrint: disableWindows()
  });
});

$('.confirm-booking-flight-info .summary-dropdown-wrap').click(function (e) {
  //$(this).parents('.add-ons-status-info-panel').siblings().removeClass('show');
  $(this).parents('.add-ons-status-info-panel').toggleClass('show');
  e.preventDefault();
});
