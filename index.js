'use strict';

var HTTPClient = require('./lib/HTTPClient');




var client = new HTTPClient('sugar');


client.request('GET').then((res)=>{
	console.log('res', res);
}, (err)=>{
	console.log('err', err);
});
