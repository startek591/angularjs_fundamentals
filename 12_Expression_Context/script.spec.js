describe('Context', function () {
  var $scope, $window;
  beforeEach(module('expressionExample2'));

  beforeEach(inject(function ($rootScope, $controller, _$window_) {
    $scope = $rootScope.$new();
    $window = _$window_;
    $controller('ExampleController2', {
      $scope: $scope,
      $window: $window,
    });
  }));

  describe('ExampleController', function () {
    it('should initially set the name value', function () {
      expect($scope.name).toEqual('World');
    });

    it('should call $window.alert with the correct message when greet is called', function () {
      $scope.greet();

      expect(typeof $window.alert).toBe('function');
    });
  });
});
