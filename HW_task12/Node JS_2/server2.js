const http = require('http');
const url = require('url');
// const querystring = require('querystring');
const static = require('node-static');
const file = new static.Server('.', {
  cache: 0
});

function accept(req, res) {

 if (req.url == '/book.json') { // set data.txt */
    setTimeout(function() {
      file.serve(req, res);
    }, 2000);
  } else {
    file.serve(req, res);
  }
}

// ------ run -------
if (!module.parent) {
  http.createServer(accept).listen(5050);
  console.log("Server running at http://localhost:5050");
} else {
  exports.accept = accept;
}