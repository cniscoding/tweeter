$(document).ready(function() {
  $('textarea').on('keyup', function() {
    const textValueLength = $(this).val().length;
    const characterRemaining = 140 - textValueLength;
    if (characterRemaining >= 0) {
      if ($('#hiddenMsg').css('display', 'block')) {
        // $( "#hiddenMsg" ).slideUp( "slow", function() {
          $('#hiddenMsg').css('display', 'none')
        // });
      }
      $('[name=counter]').css('color', '#545149');
      $('[name=counter]').val(characterRemaining);
      $('#tweet-text').css('color','black')
    } else {
      $('[name=counter]').css('color', 'red');
      $('[name=counter]').val(characterRemaining);
      $('#tweet-text').css('color','red')
      // add text turning red if over the limit
    }
  });
});