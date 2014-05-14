/**
 * Created by raiseandfall on 5/14/14.
 */
var path = require('path');

module.exports = function(name) {
	return /(\.(js|coffee)$)/i.test(path.extname(name));
};