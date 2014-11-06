angular.module('routes', []).config(['$routeProvider', function($routeProvider) {

$routeProvider

        
        .when('/', {
            templateUrl: 'views/main/main.html',
            controller: 'MainController'
        })

        
        .when('/players', {
            templateUrl: 'views/players/players.html',
            controller: 'PlayerController',
            controlleras: 'players'
        });

}]);