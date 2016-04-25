'use strict';

var dns = require('dns');
var Boom = require('boom')



class BaseClient {

	constructor(serviceName, config) {
		// this._config = config;

		Object.defineProperty(this, 'hostname', {
			get: function() {
				return [serviceName, config.domain].join('.');
			}
		});
	}


	_dnsSrvLookup() {

		var that = this;
		return new Promise(function(resolve, reject) {

			dns.resolve(that.hostname, 'SRV', function(err, result) {
				if(err || !result.length) {
					return reject( Boom.badGateway('DNS-Lookup failed') );
				}
				resolve(result);
			});

		});

	}

}


module.exports = BaseClient;



