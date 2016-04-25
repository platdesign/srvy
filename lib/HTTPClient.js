'use strict';


var BaseClient = require('./BaseClient');
var Request = require('request-promise');


class HTTPClient extends BaseClient {

	_httpRequest(method, path, data, options) {
		return this._dnsSrvLookup()
			.then(function(srv) {

				var uri = 'http://'+srv.name + (srv.port?':'+srv.port:'') + (path?path:'');

				return Request({
					method: method,
					uri: uri
				});

			})
	}

	request(method, path, data, options) {
		return this._httpRequest(method, data, options);
	}

}


module.exports = HTTPClient;
