describe('Spicy Controller', function () {
  beforeEach(module('spicyApp1'));

  var $controller, $rootScope;

  beforeEach(inject(function (_$controller_, _$rootScope_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
  }));

  describe('$scope.spice', function () {
    it('initially set as', function () {
      var $scope = $rootScope.$new();
      var controller = $controller('SpicyController', {
        $scope: $scope,
      });
      expect($scope.spice).toEqual('very');
    });
    it('sets the spice to "chili" if the user clicks on the chili button', function () {
      var $scope = $rootScope.$new();
      var controller = $controller('SpicyController', {
        $scope: $scope,
      });
      $scope.chiliSpicy();
      expect($scope.spice).toEqual('chili');
    });
    it('sets the spice to "jalapeno" if the user clicks on the jalapeno button', function () {
      var $scope = $rootScope.$new();
      var controller = $controller('SpicyController', {
        $scope: $scope,
      });
      $scope.jalapenoSpicy();
      expect($scope.spice).toEqual('jalapeño');
    });
  });
});
