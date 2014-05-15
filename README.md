tweet-alert
===========

An simple Arduino installation to send a visual alert when somebody tweets.
Uses [Johnny-five](https://github.com/rwaldron/johnny-five) & [user-stream](https://github.com/aivis/user-stream) for Twitter streaming API.

## CONTRIBUTE

```shell
$ npm install
```

## INSTALL

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
  console.log('New Tweet :: ', data);
});
```

## API

Coming soon.