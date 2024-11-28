describe('Spicy Arguments Example', function () {
  beforeEach(module('spicyApp2'));

  var $controller, $rootScope;

  beforeEach(inject(function (_$controller_, _$rootScope_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
  }));

  describe('$scope.spice', function () {
    var $scope, controller;

    beforeEach(function () {
      $scope = {};
      controller = $controller('SpicyController', { $scope: $scope });
    });

    it('initially set as', function () {
      expect($scope.spice).toEqual('very');
    });
    it('sets the spice to "chili" if the user clicks on the chili button', function () {
      const topping = 'chili';
      $scope.spicy(topping);
      expect($scope.spice).toEqual('chili');
    });
    it('sets the spice to "whatever user chooses" if the user clicks on the custom spice', function () {
      const topping = 'Custom Spice';
      $scope.spicy(topping);
      expect($scope.spice).toEqual('Custom Spice');
    });
  });
});
