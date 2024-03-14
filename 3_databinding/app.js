(function () {
  angular
    .module('myFirstApp', [])
    .controller('MyFirstController', function ($scope) {
      $scope.name = 'Jonathan';
      $scope.sayHello = function () {
        return 'Hello Coursera';
      };
    });
})();
