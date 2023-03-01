/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

$(document).ready(function() {
  console.log('client.JS - page is ready')
  // const $tweet = $(`<article class="tweet">Hello world</article>`);

  //that takes in a tweet object and is responsible for returning a tweet <article> element containing the entire HTML structure of the tweet
  createTweetElement = function() {
  const $tweet = `
      <article class="tweet-container">
      <header class="">
        <span>
          <img src="${tweetData.user.avatars}"></img>
    
          ${tweetData.user.name}
        </span>
        
         ${tweetData.user.handle}
      </header>
      <div>
         <p>${tweetData.content.text}</p>
      </div>
      <footer>
        <div>
          <p>${tweetData.created_at}</p>
        </div>
        <div>
          <i class="fa-solid fa-flag"></i>
          <i class="fa-sharp fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
     </article>
      `
      return $tweet
  }
  const $tweet = createTweetElement(tweetData);
  
    // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweet-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
 
  
  
})