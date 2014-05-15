tweet-alert
===========

A simple Arduino/NodeJS installation who triggers something when somebody tweets. e.g. flashing a led, etc... 

Uses [Johnny-five](https://github.com/rwaldron/johnny-five) & [user-stream](https://github.com/aivis/user-stream) for Twitter streaming API.

## INSTALL

```shell
$ git clone git@github.com:raiseandfall/tweet-alert.git && cd tweet-alert
$ npm install
$ node index.js
```

## BASIC EXAMPLE

This example flashes a LED every 250ms for 15s when a specific user has tweeted.

#### Arduino
![Breadboard](bb.png) 

#### JS

```javascript
var tweetAlert = require('./src/tweet-alert'),
    five = require('johnny-five'),
    app,
    board = new five.Board(),
    led;

// Init
app = new tweetAlert({
  consumer_key: 'xxxxxxxxxxxxxxxx',
  consumer_secret: 'xxxxxxxxxxxxxxxx',
  access_token_key: 'xxxxxxxxxxxxxxxx',
  access_token_secret: 'xxxxxxxxxxxxxxxx',
  screen_name: 'HuffingtonPost'
});

// Wait for the board to be ready
board.on('ready', function() {
	led = new five.Led(13);
  led.off();

  // Start to track
  app.track();

  // Listen to tweet alert
  app.on('tweet', function(data) {
    console.log('New Tweet :: ', data.text, ' by ', data.user);
  
    led.strobe(250);
    setTimeout(function() {
    	led.off();
    }, 15000);
  });
});
```

## CONTRIBUTE

```shell
# Start nodemon
$ gulp dev

# Build sources
$ gulp build
```

## API

Coming soon.