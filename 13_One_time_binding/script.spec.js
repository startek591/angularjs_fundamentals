describe('One Time Binding', function () {
  var $scope;
  beforeEach(module('oneTimeBindingExampleApp'));

  beforeEach(inject(function ($rootScope, $controller) {
    $scope = $rootScope.$new();
    $controller('EventController', { $scope: $scope });
  }));

  describe('Event Controller', function () {
    it('should initialize with an empty name', function () {
      expect($scope.name).toBeUndefined();
    });

    it('should set the name correctly on button click', function () {
      $scope.clickMe();
      expect($scope.name).toBe('Igor');

      $scope.clickMe();
      expect($scope.name).toBe('Misko');
    });

    it('should cycle through names', function () {
      $scope.clickMe();
      $scope.clickMe();
      $scope.clickMe();
      $scope.clickMe();
      $scope.clickMe();

      expect($scope.name).toBe('Igor');
    });
  });
});
