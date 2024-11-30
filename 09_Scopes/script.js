(function () {
  angular
    .module('scopeExample2', [])
    .controller('GreetController', [
      '$scope',
      '$rootScope',
      function ($scope, $rootScope) {
        $scope.name = 'World';
        $rootScope.department = 'AngularJS';
      },
    ])
    .controller('ListController', [
      '$scope',
      function ($scope) {
        $scope.names = ['Igor', 'Misko', 'Vojita'];
      },
    ]);
})();
