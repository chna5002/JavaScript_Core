const http = require("http");
const personalmodule = require("./personalmodule");
const os = require("os");
const userName = os.userInfo().username;
http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('aaaaaaaaaaaa');
}).listen(5000);
console.log(`Data of request: ${personalmodule.date}`);
console.log(personalmodule.getMessage(userName));