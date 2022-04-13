(function(){
  var app = angular.module('app', []);
  app.controller('FilterController', ['filterFilter', function FilterController(filterFilter) {
    this.array = [
      {name: 'Tobias'},
      {name: 'Jeff'},
      {name: 'Brain'},
      {name: 'Igor'},
      {name: 'James'},
      {name: 'Brad'}
    ];
    this.filteredArray = filterFilter(this.array, 'a');
  }]);
  app.filter('reverse', function() {
    return function (input, uppercase) {
      input = input || '';
      var out = '';
      for (var i = 0; i < input.length; i++) {
        out = input.charAt(i) + out;
      }

      if (uppercase) {
        out = out.toUpperCase();
      }
      return out;
    }
  })
  app.controller('MyController', ['$scope', 'reverseFilter', function($scope, reverseFilter) {
    $scope.greeting = 'hello';
    $scope.filteredGreeting = reverseFilter($scope.greeting);
  }])
})();