'use strict';

var dns = require('dns');




class BaseClient {

	constructor(serviceName) {

		Object.defineProperty(this, 'hostname', {
			get: function() {
				return serviceName + '.services';
			}
		})
	}

	_dnsSrvLookup() {
		var that = this;
		return new Promise(function(resolve, reject) {

			dns.resolve(that.hostname, 'SRV', function(err, result) {
				if(err) {
					return reject(err);
				}

				resolve(result[0]);
			});

		});
	}

	_dnsTxtLookup() {
		var that = this;
		return new Promise(function(resolve, reject) {

			dns.resolve(that.hostname, 'TXT', function(err, result) {
				if(err) {
					return reject(err);
				}

				resolve(JSON.parse(result[0]));
			});

		});
	}

}


module.exports = BaseClient;



