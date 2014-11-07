module.exports = function(app){

	var express = require('express');

	//setup router
	var router = express.Router();
	router.use(function (req, res, next) {
	  console.log('called:', req.originalUrl);
	  next();
	});
	app.use('/api/', router);

   //setup controllers
   require('./controllers/playersctrl.js')(router);

   //base route goes to 
   app.get('/', function(req, res) {
        //res.sendFile('./static/index.html', {root: __dirname + ''});
        
        res.render('index');
        
   });

   app.get('*', function(req, res) {
        //res.sendFile('./static/index.html', {root: __dirname + ''});
        
        res.redirect('/#' + req.originalUrl);
        
   });
}