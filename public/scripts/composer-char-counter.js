$(document).ready(function() {
console.log('document is ready to be counted')

  $('textarea').on('keyup', function () {

    console.log('this.val()', $(this).val())
    let textValue = $(this).val()
    const characterRemaining = 140 - textValue.length
    console.log('characterRemaining', characterRemaining) 
    $('[name=counter]').val(characterRemaining)
  })

});