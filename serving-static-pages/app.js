var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function(req,res){
// createReadStream is not working for reading the file for static html pages.
//   fs.createReadStream("./public/index.html", "UTF-8", function(err,data){
//     res.writeHead(200, {"Content-Type" : "text/html"});
//     res.end(data);
//   });

    if(req.url === "/"){
        fs.readFile("./public/index.html", "UTF-8", function(err, data){
            res.writeHead(200 , {"Content-Type" : "text/html"});
            res.end(data);
        });   
    }
    else if(req.url.match("\.css$")){
        var cssPath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {"Content-Type" : "text/css"});
        fileStream.pipe(res);
    }
    else if(req.url.match("\.jpg$")){
        var imagePath = path.join(__dirname, 'public', req.url);
        var fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type" : "image/jpg"});
        fileStream.pipe(res);
    }
    else{
        res.writeHead(404, {"Content-Type" : "text/html"});
        res.end("No Page Found");
    }

}).listen(3000);
