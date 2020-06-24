const http = require("http");
const personalmodule = require("./personalmodule");
const os = require("os");
const userName = os.userInfo().username;
http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write(`Data of request: ${personalmodule.date}`);
	response.write(personalmodule.getMessage(userName));
	response.end('');
}).listen(5000);
console.log('Server running at http://127.0.0.1:5000/');