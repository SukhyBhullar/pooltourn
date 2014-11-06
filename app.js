var express = require('express')
var app = express()

// configure app to use bodyParser()
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set the view engine to ejs
app.set('views', __dirname + '/server/views');
app.set('view engine', 'ejs');


//setup static files
app.use(express.static(__dirname + '/static')); 

//setup mongoose
var mongoose   = require('mongoose');
mongoose.connect('mongodb://fpt:fpt1111@ds063789.mongolab.com:63789/fpt');

//setup controllers
require('./server/routes')(app);

//begin server
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

})