var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/sayHello', function(req, res) {
    console.log('Pedido recibido');
    res.send('Hello from Server!!!');
});

var port = '8080';

app.listen(port, function() {
    console.log('Server listening in ' + port + ' port...');
});