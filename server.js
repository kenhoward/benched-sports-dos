var express = require('express');

var app = express();
var port = 8787;

app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
  console.log('Listening to ' + port + ', server is up and running.');
});
