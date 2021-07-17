var http = require('http');
var fs = require('fs');
var url=require('url');
var PORT=process.env.PORT||5000;

http.createServer(function (req,res){
	var q=url.parse(req.url,true);
	var filename="."+q.pathname;

	if(filename=='/'){
		filename='./index';
	}
	filename=filename+".html";
		console.log(q);
	console.log(filename);
	fs.readFile(filename,function(err,data){
		if(err){
			res.writeHead(404,{'Content-Type':'text/html'});
			return  res.end("404 Not Found");
		}
		res.writeHead(200,{'Content-Tyoe':'text/html'});
		res.write(data);
		console.log("......Incoming request: "+req.url);
		res.end();
	})

}).listen(PORT);

console.log("Server listening on port "+PORT);