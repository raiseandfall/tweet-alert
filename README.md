tweet-alert
===========

A simple Arduino/NodeJS installation who turns a LED on when somebody tweets.

Uses [Johnny-five](https://github.com/rwaldron/johnny-five) & [user-stream](https://github.com/aivis/user-stream) for Twitter streaming API.

## INSTALL

```shell
$ git clone git@github.com:raiseandfall/tweet-alert.git && cd tweet-alert
$ npm install
$ gulp dev
```

### Arduino
![Breadboard](bb.png) 

## BASIC EXAMPLE

```javascript
var tweetAlert = require('./src/tweet-alert');

// Init
var app = new tweetAlert({
  consumer_key: 'xxxxxxxxxxxxxxxx',
  consumer_secret: 'xxxxxxxxxxxxxxxx',
  access_token_key: 'xxxxxxxxxxxxxxxx',
  access_token_secret: 'xxxxxxxxxxxxxxxx',
  screen_name: 'HuffingtonPost'
});

// Start to track
app.track();

// Triggered when new tweet
app.on('tweet', function(data) {
  console.log('New Tweet :: ', data.text, ' by ', data.user);
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