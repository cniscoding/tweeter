$(document).ready(function() {
  // GET tweets with ajax
  const loadTweets = () => {
    $.ajax({
      method: 'GET',
      url: '/tweets',
      success: (response) => {
        $('#tweet-container').empty();
        renderTweets(response);
      }
    });
  };

  loadTweets();
  
  //render tweets
  const renderTweets = function(tweets) {
    for (const tweet of tweets) {
      createTweetElement(tweet);
      const $tweetComplete = createTweetElement(tweet);
      $('#tweet-container').prepend($tweetComplete);
    }
  };
  
  //creates the tweet element
  createTweetElement = function(tweet) {
    const escape = function(str) {
      let div = document.createElement("div");
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };

    const $tweetTemp = `
      <article>
      <header class="avatarName">
        <div>
          <img src="${tweet.user.avatars}"></img>
          ${tweet.user.name}       
        </div> 
         ${tweet.user.handle}
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
        hidden.css('display', 'block');
      });
    }
    event.preventDefault();

// POST tweets Ajax
    $.ajax({
      method:'POST',
      url: '/tweets',
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