describe('state', function () {
  var mainScope, childScope, grandChildScope;

  beforeEach(module('scopeInheritance'));

  beforeEach(inject(function ($rootScope, $controller) {
    mainScope = $rootScope.$new();
    $controller('MainController', { $scope: mainScope });
    childScope = mainScope.$new();
    $controller('ChildController', { $scope: childScope });
    grandChildScope = childScope.$new();
    $controller('GrandChildController', { $scope: grandChildScope });
  }));

  it('should have over and selected', function () {
    expect(mainScope.timeOfDay).toBe('morning');
    expect(mainScope.name).toBe('Nikki');
    expect(childScope.timeOfDay).toBe('morning');
    expect(childScope.name).toBe('Mattie');
    expect(grandChildScope.timeOfDay).toBe('evening');
    expect(grandChildScope.name).toBe('Gingerbread Baby');
  });
});
