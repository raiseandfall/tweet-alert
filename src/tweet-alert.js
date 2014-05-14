/**
 * Created by raiseandfall on 5/14/14.
 */

'use strict';

function TweetAlert(opts) {

  if (!(this instanceof TweetAlert)) {
    return new TweetAlert(opts);
  }

}

TweetAlert.prototype.log = function(opts) {
	console.log('TweetAlert :: log : ', opts);
};

module.exports = TweetAlert;