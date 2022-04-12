(function(){
  var app = angular.module('app', []);
  app.controller('ExampleController', ['$scope', function($scope) {
    var exprs = $scope.exprs = [];
    $scope.expr = '3*10|currency';
    $scope.addExp = function(expr) {
      exprs.push(expr);
    };

    $scope.removeExp = function(index) {
      exprs.splice(index, 1);
    }
  }]);
  app.controller('ExampleController2', ['$window', '$scope', function($window, $scope) {
    $scope.name = 'World';

    $scope.greet = function() {
      $window.alert('Hello ' + $scope.name);
    }
  }]);
  app.controller('ExampleController3', ['$scope', function($scope) {
    $scope.clickMe = function(clickEvent) {
      $scope.clickEvent = simpleKeys(clickEvent);
      console.log(clickEvent);
    }

    function simpleKeys(original) {
      return Object.keys(original).reduce(function(obj, key) {
        obj[key] = typeof original[key] === 'object'? '{...}': original[key];
        return obj;
      }, {});
    }
  }]);
  app.controller('ExampleController4', ['$scope', function($scope) {
    var counter = 0;
    var names = ['Igor', 'Misko', 'Chirayu', 'Lucas'];
    $scope.clickMe = function(clickEvent) {
      $scope.name = names[counter % names.length];
      counter++;
    }
  }])
})();