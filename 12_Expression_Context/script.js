angular
  .module('expressionExample2', [])
  .controller('ExampleController2', [
    '$window',
    '$scope',
    function ($window, $scope) {
      $scope.name = 'World';

      $scope.greet = function () {
        $window.alert('Hello ' + $scope.name);
      };
    },
  ]);
