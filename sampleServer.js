var http = require('http');

var port = 3000;
var plainHeaders = {'Content-Type' : 'text/plain'};
var jsonHeaders = {'Content-Type':'text/json'};
var htmlHeaders = {'Content-Type':'text/html'};



var server = http.createServer(function(req, res){
    console.log('Request was made :' +req.url);
    res.writeHead(200, htmlHeaders);
    res.end('Hey');
});

server.listen(port, 'localhost');
console.log('Server is listening @ port '+port);