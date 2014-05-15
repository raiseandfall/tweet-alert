/**
 * Created by raiseandfall on 5/14/14.
 */

'use strict';

var Stream = require('user-stream'),
    events = require('events'),
    util   = require('util'),
    stream;

function TweetAlert(opts) {

  if (!(this instanceof TweetAlert)) {
    return new TweetAlert(opts);
  }

  events.EventEmitter.call(this);

  this.opts = opts;

  // New Twitter Stream
  stream = new Stream(opts);

}

//inherit
util.inherits(TweetAlert, events.EventEmitter);

TweetAlert.prototype.track = function() {

  var tweetAlert = this;

  // If missing parameters
  if (typeof this.opts !== 'object') {
    tweetAlert.emit('error', {
      message: 'Missing parameters'
    });
    return false;
  }

  // If user specific
  var screenNameFilter = this.opts.screen_name || false;
  
  // Start the stream
  stream.stream();

  // Called when stream connected
  stream.on('connected', function() {
    console.log('stream connected');
  });

  // Error handler
  stream.on('error', function(data) {
  	console.log('stream error : ', data);
  });

  // Called when data is received
  stream.on('data', function(json) {
  	// Filter by user
    if (json.user) {
      if (!screenNameFilter || (json.user.screen_name === screenNameFilter)) {
        tweetAlert.emit('tweet', {
          text: json.text,
          user: json.user.screen_name,
          id: json.user.id
        });
      }
    }
  });
};

module.exports = TweetAlert;