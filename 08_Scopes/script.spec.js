describe('ScopeExample', function () {
  var $controller, $rootScope;
  beforeEach(module('scopeExample'));

  beforeEach(inject(function (_$controller_, _$rootScope_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
  }));

  describe('MyController', function () {
    var $scope;

    beforeEach(function () {
      $scope = {};
      $controller('MyController', { $scope: $scope });
    });

    it('initially set as', function () {
      expect($scope.username).toEqual('World');
    });

    it('sets the greeting value', function () {
      $scope.username = 'User';
      $scope.sayHello();
      expect($scope.greeting).toEqual('Hello User!');
    });
  });
});
