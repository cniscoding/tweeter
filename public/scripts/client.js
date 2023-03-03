$(document).ready(function() {
  const selectNewTweet = $('.divWriteTweet')
  const newTweetSection = $('.new-tweet');


    selectNewTweet.on('click', ()=> {
    if (newTweetSection.css('display') == 'none') { 
      newTweetSection.slideDown("slow", function() {
      newTweetSection.css('display', 'block');
      $('#tweet-text').focus()
      })
    }
    else if (newTweetSection.css('display') == 'block') { 
      newTweetSection.slideUp("slow", function() {
        newTweetSection.css('display', 'none');
        })
    }
  })

  

  const loadTweets = () => {
    $.ajax({
      method: 'GET',
      url: 'http://localhost:8080/tweets',
      success: (response) => {
        $('#tweet-container').empty();
        renderTweets(response);
      }
    });
  };

  loadTweets();
  
  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      createTweetElement(tweet);
      const $tweetComplete = createTweetElement(tweet);
      $('#tweet-container').prepend($tweetComplete);
    }
  };
  
  createTweetElement = function(tweet) {
    const escape = function(str) {
      let div = document.createElement("div");
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };

    const $tweetTemp = `
      <article>
      <header class="avatarName">
        <span>
          <img src="${tweet.user.avatars}"></img>
          <p>${tweet.user.name}<p>
        </span>
         <p>${tweet.user.handle}<p>
      </header>
      <div>
         <p>${escape(tweet.content.text)}</p>
      </div>
      <footer>
        <div>
          <p>${timeago.format(tweet.created_at)}</p>
        </div>
        <div>
          <i class="fa-solid fa-flag"></i>
          <i class="fa-sharp fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
     </article>
      `;
    return $tweetTemp;
  };
   
  const $tweetForm = $('form');
  $tweetForm.on('submit', (event) => {
    const urlEncoded = $tweetForm.serialize();
    const textLength = $('textarea').val().length;
    const hidden = $('#hiddenMsg');

    if (textLength === 0 || textLength > 140) {
      hidden.slideDown("slow", function() {
        document.getElementById('hiddenMsg').innerHTML = '❗️Your message should be at least 1 characters, with a maximum of 140 characters';
        // $('#hiddenMsg').val('why does this not change');
        hidden.css('display', 'block');
        // .val('❗️Your message should be at least 1 character')
      });

      console.log('hidden', hidden.val());
    }
    event.preventDefault();
    // console.log(urlEncoded)

    $.ajax({
      method:'POST',
      url: 'http://localhost:8080/tweets',
      data :urlEncoded,
      success: (response) => {
        console.log(response);
        $('textarea').val('');
        $('[name=counter]').val('140');
        loadTweets();
      }
    });
  });
});