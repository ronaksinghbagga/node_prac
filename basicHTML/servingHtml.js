var http = require('http');
var fs= require('fs');
var path = require('path');
var port = 3000;
var plainHeaders = {'Content-Type' : 'text/plain'};
var jsonHeaders = {'Content-Type':'text/json'};
var htmlHeaders = {'Content-Type':'text/html'};
var cssHeaders = {'Content-Type':'text/css'};
var javascriptHeaders = {'Content-Type': 'text/javascript'};



var server = http.createServer(function(req, res){
    console.log('Request was made :' +req.url);
    if(req.url === "/"){
    res.writeHead(200, htmlHeaders);
}   
    else if(req.url.match("\.css")){
        res.writeHead(200, cssHeaders);
    }
    else if(req.url.match("\.js")){
        res.writeHead(200, javascriptHeaders);
    }
    // var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
    // myReadStream.pipe(res);
    fs.readFile(__dirname + "/index.html", "UTF-8", function(err, html){
        res.writeHead(200, {"Content-Type": "text/html"});
        res.end(html);
    });
    fs.readFile(__dirname + "/style.css","UTF-8", function(err, css){
        res.writeHead(200, {"Content-Type": "text/css"});
        res.end(css);
        
    });
});

server.listen(port, 'localhost');
console.log('Server is listening @ port '+port);