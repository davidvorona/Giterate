//Node - front end masters
// Why node? same programming culture on client and server
// not good for simple CRUD apps(frameworks not as good)
//uses v8 javascript runtime
//event driven
//non-blocking
//most APIs will accpet callbacks/have events
//node is NOT a framework
//HTTP is first class citizen
//low level - not a lot of abstractions

var http = require('http');

http.createServer(function(request, response) {
  response.writeHead({
    'Content-Type' : 'text/plain'
  })
  response.end('HELLO WORLD');
}).listen(3000);
