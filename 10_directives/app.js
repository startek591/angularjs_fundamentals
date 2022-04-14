(function(){
  var app = angular.module('app', []);
  app.controller('Controller', ['$scope', function($scope) {
    $scope.name = 'Max Karl Ernst Ludwig Plank (April 23, 1858 - October 4, 1947)';
  }])
  app.controller('Controller2', ['$scope', function ($scope) {
    $scope.customer = {
      name: 'Naomi',
      address: '1600 Amphitheatre'
    };
  }])
  app.directive('myCustomer', function() {
    return  {
      template: 'Name: {{customer.name}} Address: {{customer.address}}'
    };
  });
  app.controller('Controller3', ['$scope', function ($scope) {
    $scope.customer = {
      name: 'Naomi',
      address: '1600 Amphitheatre'
    }
  }])
  app.directive('myCustomer2', function() {
    return {
      templateUrl: 'my-customer.html'
    };
  });
  app.controller('Controller4', ['$scope', function ($scope) {
    $scope.customer = {
      name: 'Naomi',
      address: '1600 Amphitheatre'
    };
  }]);
  app.directive('myCustomer3', function() {
    return {
      templateUrl: function(elem, attr) {
        return 'customer-' + attr.type + '.html';
      }
    };
  });
  app.controller('Controller5', ['$scope', function($scope) {
    $scope.customer = {
      name: 'Naomi',
      address: '1600 Amphitheatre'
    }
  }]);
  app.directive('myCustomer4', function() {
    return {
      restrict: 'E',
      templateUrl: 'my-customer.html'
    }
  });
  app.controller('NaomiController', ['$scope', function($scope) {
    $scope.customer = {
      name: 'Naomi',
      address: '1600 Ampitheatre'
    };
  }])
  app.controller('IgorController', ['$scope', function($scope) {
    $scope.customer = {
      name: 'Igor',
      address: '123 Somewhere'
    }
  }])
  app.directive('myCustomer5', function() {
    return {
      restrict: 'E',
      templateUrl: 'my-customer.html'
    }
  });
  app.controller('Controller6', ['$scope', function($scope) {
    $scope.naomi = { name: 'Naomi', address: '1600 Amphitheature' };
    $scope.igor = { name: 'Igor', address: '123 Somewhere' };
  }]);
  app.directive('myCustomer6', function() {
    return {
      restrict: 'E',
      scope: {
        customerInfo: '=info'
      },
      templateUrl: 'my-customer-iso.html'
    };
  });
  app.controller('Controller7', ['$scope', '$timeout', function($scope, $timeout) {
    $scope.name = 'Tobias';
    $scope.message = '';
    $scope.hideDialog = function(message) {
      $scope.message = message;
      $scope.dialogIsHidden = true;
      $timeout(function() {
        $scope.message = '';
        $scope.dialogIsHidden = false;
      }, 2000);
    }
  }]);
  app.directive('myDialog', function() {
    return {
      restrict: 'E',
      transclude: true,
      scope: {
        'close': '&onClose'
      },
      templateUrl: 'my-dialog-close.html'
    }
  })
})();