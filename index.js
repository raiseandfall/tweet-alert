/**
 * Created by raiseandfall on 5/14/14.
 */
var tweetAlert = require('./src/tweet-alert'),
    five = require('johnny-five'),
    app,
    board,
    led;

board = new five.Board();
app = new tweetAlert({
  consumer_key: 'Vh8WxkYWHDBRji9Ezrp4fOo18',
  consumer_secret: 'zs3wMiEqqx9OIcqcQViyc7cXmu4GbgDsNNkenL7M2lpthz0kxZ',
  access_token_key: '7494222-tx6dJGZApWjSHqlLJKiOTAbTfvPZw5L4DFEpAfPqtA',
  access_token_secret: 'envvJYH6Ik0NAbqKuAuWvk5vQxjs4NLZpyx1cwTKCqscE',
  screen_name: 'HuffingtonPost'
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

    led.strobe(250);
    setTimeout(function() {
    	led.off();
    }, 15000);
  });
});
