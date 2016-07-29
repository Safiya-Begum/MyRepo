var http=require('http');
http.createServer(function(request,response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.end('Connected to server');
}).listen(8081);

console.log("Server is running on port :8081");