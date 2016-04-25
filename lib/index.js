'use strict';

var HTTPClient = require('./HTTPClient');
var extend = require('util')._extend;


var defaultConfig = {
	domain: 'services'
};


module.exports = function(_config) {

	var config = extend(extend({}, defaultConfig), _config||{});

	return {
		http: function(name) {
			return new HTTPClient(name, config);
		}
	};

};
