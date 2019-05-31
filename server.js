var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

//With query params
app.get('/sayHello', function(req, res) {
    console.log('New request');
    var name = req.query.name;
    res.send('Hello from Server!!! Nice to meet you ' + name);
});

//With path params
app.get('/sayHello/:name', function(req, res) {
    console.log('New request');
    var name = req.params.name;
    res.send('Hello from Server!!! Nice to meet you ' + name);
});

var port = '8082';

app.listen(port, function() {
    console.log('Server listening in ' + port + ' port...');
});

process.on('SIGTERM', function() {
    server.close(function() {
      console.log('Process terminated');
    });
});