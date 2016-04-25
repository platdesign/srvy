#srvy

DNS based ServiceDiscovery-clients

Register service-domain `SRV`-entries in a DNS-Server which can be reached from node. 

## Pros
- single point of configuration
- flexible and easy ip/port configuration for services 
- scalable (load-balancer entries)
- usable with automated service-registration like consul or other service-discovery-dnsable solutions

#Install
`npm install --save srvy`


#Usage in Javascript

```javascript
var srvy = require('srvy')({
	domain: 'services.example.com'
});

var HelloService = srvy.http('hello');

HelloService
	.request('GET', '/hello')
	.then(function(response){
		// Handle response
	});
```


#DNSmasq example

Install DNSmasq and create a `services.conf` file for your services.

```config
srv-host=hello.services.example.com,127.0.0.1,3001
srv-host=testA.services.example.com,127.0.0.1,3002
srv-host=testB.services.example.com,127.0.0.1,3003
srv-host=testC.services.example.com,127.0.0.1,3004
```

Now you can use `srvy` to request the services behind these srv-entries.

```javascript
var srvy = require('srvy')({
	domain: 'services.example.com'
});

var HelloService = srvy.http('hello');
var TestAService = srvy.http('testA');
var TestBService = srvy.http('testB');
var TestCService = srvy.http('testC');
```


#Author

Christian Blaschke <mail@platdesign.de>
