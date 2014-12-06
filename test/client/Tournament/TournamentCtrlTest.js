describe('TournamentCtrl', function() {
  // Load the module with MainController
  beforeEach(module('fpt'));

  var ctrl, scope;
  // inject the $controller and $rootScope services
  // in the beforeEach block
  beforeEach(inject(function($controller, $rootScope) {
    // Create a new scope that's a child of the $rootScope
    scope = $rootScope.$new();
    // Create the controller
    ctrl = $controller('MainController', {
      $scope: scope
    });
  }));

  it('scope must have test equal to 1', function(){
      expect(scope.test).toEqual(1);
  });


})