'use strict';


var BaseClient = require('./BaseClient');



class HTTPClient extends BaseClient {

	_httpRequest(method, path, data, options) {
		return this._dnsSrvLookup()
			.then(function(srv) {



				return srv;
			})
	}

	request(method, path, data, options) {
		return _httpRequest(method, data, options);
	}

}


module.exports = HTTPClient;
