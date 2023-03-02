/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

$(document).ready(function() {
  console.log('client.JS - page is ready');
  
  // $('#tweet-container').empty() when doing ajax
  const renderTweets = function(tweets) {
    // loops through tweets
    for (const tweet of tweets) {
      // calls createTweetElement for each tweet
      createTweetElement(tweet);
      // takes return value and appends it to the tweets container
      const $tweetComplete = createTweetElement(tweet);
      
      $('#tweet-container').append($tweetComplete);
    }
  };
  //that takes in a tweet object and is responsible for returning a tweet <article> element containing the entire HTML structure of the tweet
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
          <p>${tweet.created_at}</p>
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
   
  renderTweets(tweetData);

  const $tweetForm = $('form')
  $tweetForm.on('submit', (event) => {
    event.preventDefault();
    const urlEncoded = $tweetForm.serialize();
    console.log(urlEncoded)
    $.ajax({
      method:'POST',
      url: '../../server/index.js',
      data :urlEncoded,
      sucess: (response) => {
        console.log(response);
      }
    })
    //get data from form
    //urlEncoded the data
    //make ajax post request

  })
  
});