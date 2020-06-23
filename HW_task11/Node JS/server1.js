const http = require("http");
const os = require("os");
const path = require("path")
http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write("<h1>System information</h1>\n")

	//response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('OS type : '  + os.type() + '</br>');
	response.write('Current user name : ' + os.userInfo().username + '</br>');
	response.write('System work time : ' + os.uptime() + '</br>');
	response.write(' Server file name : ' + path.basename("C:\\Users\\chna5002\\Documents\\GitHub\\JavaScript_Core\\HW_task11\\Node JS\\server1.js") + '</br>');
	response.write('Current work derectory : ' + path.dirname("C:\\Users\\chna5002\\Documents\\GitHub\\JavaScript_Core\\HW_task11\\Node JS\\server1.js") + '</br>');
	response.end('');
}).listen(5000);
console.log('Server running at http://127.0.0.1:5000/');
