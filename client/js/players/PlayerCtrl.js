angular.module('PlayerCtrl', []).controller('PlayerController', function(PlayerFactory) {

		this.all = PlayerFactory.query();

});
