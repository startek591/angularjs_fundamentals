(function () {
  angular
    .module('ControllerAsApp', [])
    .controller('ParentController', ParentController)
    .controller('ChildController', ChildController);

  function ParentController() {
    let parent = this;
    parent.value = 1;
  }

  ChildController.$inject = ['$scope'];
  function ChildController($scope) {
    let child = this;
    child.value = 5;
    console.log('ChildController scope: ', $scope);
  }
})();
