$('.panel-table-wrap input[type=radio]').change(function () {
  var samecheckststus = $(this).parents('.panel-table-wrap').find('.checkbox-wrap input').is(':checked');
  if (samecheckststus) {

    var currentIndex = $(this).parents('td').index();
    // $(this).parents('.panel-table-row').siblings().find('input[type=radio]').prop('checked', false);
    // $(this).parents('.panel-table-row').find('input[type=radio]').prop('checked', true);

    $(this).parents('.panel-table-row').siblings().find('td').find('input[type=radio]').prop('checked', false);
    $(this).parents('.panel-table-row').siblings().each(function () {
      $(this).find('td').eq(currentIndex).find('input[type=radio]').prop('checked', true);
    });

  }
});

$('.panel-table-wrap input[type=checkbox]').change(function () {
  var samecheckststus = $(this).parents('.panel-table-wrap').find('.checkbox-wrap input').is(':checked');
  if (samecheckststus) {
    var selectIndex = 3;

    $(this).parents('thead').next('tbody').find('.panel-table-row').each(function () {
      var checkSlect = $(this).find('input[type=radio]:checked').parents('td').index();
      if (checkSlect != 3) {
        selectIndex = checkSlect;
      }
    });

    $(this).parents('thead').next('tbody').find('.panel-table-row td').find('input[type=radio]').prop('checked', false);
    $(this).parents('thead').next('tbody').find('.panel-table-row').each(function () {
      $(this).find('td').eq(selectIndex).find('input[type=radio]').prop('checked', true);
    });
  }
});

//Mobile cloning


$('.add-ons-baggage-wrap .accordion-item').each(function () {
  var blockLabel = $(this).find('.panel-table-wrap .panel-table thead .panel-table-row td:nth-child(2) .panel-table-data').text();
  $(this).find('.panel-table-wrap .panel-table tbody .panel-table-row').each(function () {
    $(this).find('td:first').append('<div class="table-data-label">' + blockLabel + '</div>');
  });
});
