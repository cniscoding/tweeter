$(document).ready(function() {
  $('textarea').on('input', function() {
    const textValueLength = $(this).val().length;
    const characterRemaining = 140 - textValueLength;
    if (characterRemaining >= 0) {
      if ($('#hiddenMsg').css('display', 'block')) {
        $('#hiddenMsg').css('display', 'none');
      }
      $('[name=counter]').css('color', '#545149');
      $('[name=counter]').val(characterRemaining);
      $('#tweet-text').css('color','black');
    } else {
      $('[name=counter]').css('color', 'red');
      $('[name=counter]').val(characterRemaining);
      $('#tweet-text').css('color','red');
    }
  });
});