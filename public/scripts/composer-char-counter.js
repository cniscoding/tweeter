$(document).ready(function() {
  $('textarea').on('keyup', function () {
    const textValueLength = $(this).val().length
    const characterRemaining = 140 - textValueLength
    if ( characterRemaining > 0) {
      $('[name=counter').css('color', '#545149')
      $('[name=counter]').val(characterRemaining)
    } else {
      $('[name=counter').css('color', 'red')
      $('[name=counter]').val(characterRemaining)
    }
  })
});