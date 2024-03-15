(function () {
  angular
    .module('CounterApp', [])
    .controller('CounterController', CounterController);

  CounterController.$inject = ['$scope'];
  function CounterController($scope) {
    $scope.counter = 0;
    $scope.name = 'Jonathan';

    // $watch() function is used to watch the changes of variables

    $scope.showNumberOfWatchers = function () {
      console.log('# of Watchers: ', $scope.$$watchersCount);
    };

    $scope.countOnce = function () {
      $scope.onceCounter = 1;
    };

    $scope.upCounter = function () {
      $scope.counter++;
    };
  }
})();
