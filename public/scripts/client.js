/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const loadTweets = () => {
    $.ajax({
        method: 'GET',
        url: 'http://localhost:8080/tweets',
        success: (response) => {
          $('#tweet-container').empty();
          renderTweets(response);
        }
      })
  };

  loadTweets();
  
  const renderTweets = function(tweets) {
    // loops through tweets
    for (const tweet of tweets) {
      // calls createTweetElement for each tweet
      createTweetElement(tweet);
      // takes return value and appends it to the tweets container
      const $tweetComplete = createTweetElement(tweet);
      
      $('#tweet-container').prepend($tweetComplete);
    }
  };
  
  createTweetElement = function(tweet) {
    const $tweetTemp = `
      <article>
      <header class="avatarName">
        <span>
          <img src="${tweet.user.avatars}"></img>
    
          ${tweet.user.name}
        </span>
        
         ${tweet.user.handle}
      </header>
      <div>
         <p>${tweet.content.text}</p>
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
   
  // renderTweets(tweetData);

  const $tweetForm = $('form')
  $tweetForm.on('submit', (event) => {
    event.preventDefault();
    const urlEncoded = $tweetForm.serialize();
    console.log(urlEncoded)
    $.ajax({
      method:'POST',
      url: 'http://localhost:8080/tweets',
      data :urlEncoded,
      success: (response) => {
        console.log(response);
        loadTweets();
      }
    })
  }) 
});