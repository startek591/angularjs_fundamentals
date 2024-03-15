(function () {
  angular
    .module('CounterApp', [])
    .controller('CounterController', CounterController);

  CounterController.$inject = ['$scope', '$timeout'];
  function CounterController($scope, $timeout) {
    $scope.counter = 0;

    // $scope.upCounter = function () {
    //   setTimeout(function () {
    //     // $apply - execute custom code and then call digest
    //     $scope.$apply(function () {
    //       console.log('Counter incremented!');
    //     });
    //   }, 2000);
    // };

    // $scope.upCounter = function () {
    //   setInterval(function () {
    //     $scope.counter++;
    //     console.log('Counter increment!');
    //     // $digest - iterate through the watch list variables and check if any changes made for those variables or not.
    //     $scope.$digest();
    //   }, 2000);
    // };

    $scope.upCounter = function () {
      $timeout(function () {
        $scope.counter++;
        console.log('Counter incremented');
      }, 2000);
    };
  }
})();
