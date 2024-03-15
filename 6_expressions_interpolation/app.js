(function () {
  angular
    .module('MsgApp', [])
    .controller('MsgController', MsgController);

  MsgController.$inject = ['$scope'];
  function MsgController($scope) {
    $scope.name = 'Jonathan';
    $scope.stateOfBeing = 'hungry';

    $scope.sayMessage = function () {
      return 'Yaakov likes to eat healthy snacks at night!';
    };

    $scope.feedJonathan = function () {
      $scope.stateOfBeing = 'fed';
    };
  }
})();
