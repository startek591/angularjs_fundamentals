(function () {
  angular
    .module('DIApp', [])
    .controller('DIController', DIController);

  function DIController($scope, $filter, $injector) {
    $scope.name = 'Jonathan';

    $scope.upper = function () {
      let upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };

    console.log($injector.annotate(DIController));
  }
})();
