$(document).ready(function() {
  // toggle tweet Textbox by clicking the Write a new Tweet text
  const selectNewTweet = $('.divWriteTweet');
  const newTweetSection = $('.new-tweet');

  selectNewTweet.on('click', ()=> {
    if (newTweetSection.css('display') == 'none') {
      newTweetSection.slideDown("slow", function() {
        newTweetSection.css('display', 'block');
        $('#tweet-text').focus();
      });
    } else if (newTweetSection.css('display') == 'block') {
      newTweetSection.slideUp("slow", function() {
        newTweetSection.css('display', 'none');
      });
    }
  });
});