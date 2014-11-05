module.exports = function(router) {

	var Player = require('../models/player.js')


	router.route('/players')
	.get(function(req, res){
		Player.find(function(err, players) {
			if (err)
				res.send(err);

			res.json(players);
		});

	})
	.post(function(req, res){
		  	  console.log(req.body);
		var player = new Player();
		player.name = req.body.name;

		if (player.name == undefined){
			res.send("no name");
		}
		else{
			player.save(function(err, player) {
				if (err)
				{
					res.send(err);
				}
				else
				{
					res.json(player);
				}
			});
		}
	});

	router.route('/players/:player_id')
	.get(function(req, res) {
		Player.findById(req.params.player_id, function(err, player) {
			if (err){
				res.send(err);
			}
			else{
				res.json(player);
			}
		});
	})
	.put(function(req, res) {

		Player.findByIdAndUpdate(
			req.params.player_id, 
			{ name : req.body.name}, 
			function(err, player) {
				if (err)
				{
					res.send(err);
				}
				{
					res.json(player);
				}
			}
		);
	})
	.delete(function(req, res) {
		Player.remove({
			_id: req.params.player_id
		}, function(err, player) {
			if (err)
			{
				res.send(err);
			}
			else{
				res.status(204).end();	
			}

		});
	});

}