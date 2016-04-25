'use strict';


var BaseClient = require('./BaseClient');
var Request = require('request-promise');
var Boom = require('boom');

class HTTPClient extends BaseClient {

	_httpRequest(method, path, data, options) {
		return this._dnsSrvLookup()
			.then(function(srvs) {

				var srv = srvs[0];
				
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
