(function () {
  angular
    .module('MsgApp', [])
    .controller('MsgController', MsgController);

  MsgController.$inject = ['$scope', '$filter'];
  function MsgController($scope, $filter) {
    $scope.cookieCost = 0.45;
    $scope.sayMessage = function () {
      let msg = 'Jonathan likes to eat healthy snacks at night';
      let output = $filter('uppercase')(msg);
      return output;
    };
  }
})();
