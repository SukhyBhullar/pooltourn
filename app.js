var express = require('express')
var app = express()

// configure app to use bodyParser()
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//setup routes
var router = express.Router();
router.use(function (req, res, next) {
  console.log('called:', req.originalUrl);
  next();
});
app.use('/api/', router);

//setup mongoose
var mongoose   = require('mongoose');
mongoose.connect('mongodb://fpt:fpt1111@ds063789.mongolab.com:63789/fpt');

//setup controllers
require('./server/controllers/playersctrl.js')(router);

//begin server
var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

})