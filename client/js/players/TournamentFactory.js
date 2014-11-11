angular.module('TournamentFactory', []).factory('TournamentFactory', function($resource) {
	return $resource('/api/tournaments/:id');
});
