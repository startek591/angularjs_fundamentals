describe('Expressions', function () {
  var $scope;
  beforeEach(module('expressionExample'));

  beforeEach(inject(function ($rootScope, $controller) {
    $scope = $rootScope.$new();
    $controller('ExampleController', { $scope: $scope });
  }));

  describe('ExampleController', function () {
    it('expr is initially set to', function () {
      expect($scope.expr).toEqual('3*10|currency');
    });

    it('when users clicks the evaluate button', function () {
      const expr = ($scope.expr = 'ABC');
      $scope.addExp(expr);
      expect(typeof $scope.addExp).toBe('function');
      expect($scope.expr).toEqual('ABC');
    });

    it('when user clics on the x in the ui', function () {
      $scope.addExp('ABCD');
      $scope.addExp('EFGH');
      $scope.addExp('IJKL');

      $scope.removeExp(1);
      expect(typeof $scope.removeExp).toBe('function');
      expect($scope.exprs.length).toBe(2);
      expect($scope.exprs).not.toContain('EFGH');
    });
  });
});
