module.exports = function(router) {

	var Tournament = require('../models/tournament.js');


	router.route('/tournaments')
	.get(function(req, res){
		Tournament.find(function(err, tournaments) {
			if (err)
				res.send(err);

			res.json(tournaments);
		});

	})
	.post(function(req, res){
		  	  console.log(req.body);
		var tournament = new Tournament();
		tournament.name = req.body.name;

		if (tournament.name == undefined){
			res.send("no name");
		}
		else{
			tournament.save(function(err, tournament) {
				if (err)
				{
					res.send(err);
				}
				else
				{
					res.json(tournament);
				}
			});
		}
	});

	router.route('/tournaments/:tournament_id')
	.get(function(req, res) {
		Tournament.findById(req.params.tournament_id, function(err, tournament) {
			if (err){
				res.send(err);
			}
			else{
				res.json(tournament);
			}
		});
	})
	.put(function(req, res) {

		Tournament.findByIdAndUpdate(
			req.params.tournament_id, 
			{ name : req.body.name}, 
			function(err, tournament) {
				if (err)
				{
					res.send(err);
				}
				{
					res.json(tournament);
				}
			}
		);
	})
	.delete(function(req, res) {
		Tournament.remove({
			_id: req.params.tournament_id
		}, function(err, tournament) {
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