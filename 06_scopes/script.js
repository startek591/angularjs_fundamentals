(function(){
  var myapp = angular.module('scopeExample', []);
  myapp.controller('MyController', ['$scope', function($scope) {
    $scope.username = 'World';

    $scope.sayHello = function() {
      $scope.greeting = 'Hello ' + $scope.username + '!';
    }
  }]);
  myapp.controller('GreetController', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.name = 'World';
    $rootScope.department = 'AngularJS';
  }])
  myapp.controller('ListController', ['$scope', function ($scope) {
    $scope.names = ['Igor', 'Misko', 'Vojta'];
  }]);
  myapp.controller('EventController', ['$scope', function($scope) {
    $scope.count = 0;
    $scope.$on('MyEvent', function() {
      $scope.count++;
    });
  }]);
})();