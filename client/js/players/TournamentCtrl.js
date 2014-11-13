angular.module('TournamentCtrl', []).controller('TournamentController', function($scope, TournamentFactory) {

		$scope.add = function(){
			TournamentFactory.save({yearstring : $scope.yeartext}, function(){
				$scope.tounament = TournamentFactory.query();
			}); 
		};

});
