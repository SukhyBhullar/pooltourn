angular.module('routes', []).config(['$routeProvider', function($routeProvider) {

$routeProvider

        
        .when('/', {
            templateUrl: 'views/main/main.html',
            controller: 'MainController'
        })

        
        .when('/tournaments', {
            templateUrl: 'views/tournaments/tournaments.html',
            controller: 'TournamentController'
        });

}]);