/**
 * Created by raiseandfall on 5/14/14.
 */
var tweetAlert = require('./src/tweet-alert'),
    five = require('johnny-five'),
    sh = require('execSync'),
    config = require('./config'),
    app,
    board,
    led;

board = new five.Board();
app = new tweetAlert({
  consumer_key: config.consumer_key,
  consumer_secret: config.consumer_secret,
  access_token_key: config.access_token_key,
  access_token_secret: config.access_token_secret,
  screen_name: config.screen_name
});

// Wait for the board to be ready
board.on('ready', function() {
  console.log('Board ready');

  led = new five.Led(13);
  led.off();

  // Start to track
  app.track();

  // Listen to tweet alert
  app.on('tweet', function(data) {
    console.log('New Tweet :: ', data);

    // Remove URLs in tweet
    var cleanedTweet = data.text.replace(/(https?:\/\/(\S+))/i, "");

    led.strobe(200);
    setTimeout(function() {
      led.off();
    }, 8000);

    sh.run("say -v 'Good News' 'Tweet Alert !!'");

    setTimeout(function() {
      sh.run('say "' + data.name + ' just tweeted"');
    }, 1000);

    setTimeout(function() {
      sh.run('say \"' + cleanedTweet + '\"');
    }, 1000);
  });
  
  app.on('error', function(data) {
  	console.log('Tweet Alert Error : ' + data);
  });
  
  app.on('connected', function() {
  	console.log('stream connected');
  })
});
