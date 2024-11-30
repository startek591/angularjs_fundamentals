describe('Scope Example', function () {
  var mainScope, childScope;

  beforeEach(module('scopeExample2'));

  beforeEach(inject(function ($rootScope, $controller) {
    mainScope = $rootScope.$new();
    $controller('GreetController', { $scope: mainScope });
    childScope = mainScope.$new();
    $controller('ListController', { $scope: childScope });
  }));

  describe('GreetController', function () {
    it('should initially set name', function () {
      expect(mainScope.name).toBe('World');
    });
    it('should initially set the department', function () {
      expect(mainScope.department).toBe('AngularJS');
    });
  });

  describe('ListController', function () {
    it('should initially set names', function () {
      expect(childScope.names.length).toBe(3);
    });
    it('should have names set', function () {
      expect(childScope.names).toContain('Igor');
    });
    it('should not have names set', function () {
      expect(childScope.name).not.toContain('Tom');
    });
  });
});
