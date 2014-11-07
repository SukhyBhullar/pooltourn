angular.module('PlayerFactory', []).factory('PlayerFactory', function($resource) {
	return $resource('/api/players/:id');
});
