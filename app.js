var express = require('express'),
	cons = require('consolidate'),
	mongodb = require('mongodb');

var app = express();

//middle ware
app.get('/', function(req, res){

	console.log(req.toString());
	res.send('Hello World');

});

//if route not handled through get method above then
// will be handled in bottom code
app.use(function(req, res) {
	res.sendStatus(404);
	console.log('Not Found');
});

var server = app.listen(3000, function() {
	var port = server.address().port;
	console.log('express server listening on port %s', port);
});
