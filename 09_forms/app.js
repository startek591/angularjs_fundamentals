(function(){
  var INTEGER_REGEXP = /^-?\d+$/;
  var app = angular.module('formExample', [])

  app.controller('ExampleController', ['$scope', function($scope) {
    $scope.master = {};
    $scope.update = function(user) {
      $scope.master = angular.copy(user);
    };
    $scope.reset = function() {
      $scope.user = angular.copy($scope.master);
    };

    $scope.reset();
  }])
  app.controller('ExampleController2', ['$scope', function($scope) {
    $scope.master = {};

    $scope.update = function(user) {
      $scope.master = angular.copy(user);
    };

    $scope.reset = function(form) {
      if (form) {
        form.$setPristine();
        form.$setUntouched();
      }
      $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
  }])
  app.controller('ExampleController3', ['$scope', function($scope) {
    $scope.user = {};
  }])
  app.directive('integer', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$validators.integer = function(modelValue, viewValue) {
          if (ctrl.$isEmpty(modelValue)) {
            return true;
          }
          if (INTEGER_REGEXP.test(viewValue)) {
            return true;
          }
          return false;
        }
      }
    }
  })
  app.directive('username', function($q, $timeout) {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        var usernames = ['Jim', 'John', 'Jill', 'Jackie'];
        ctrl.$asyncValidators.username = function(modelValue, viewValue) {
          if (ctrl.$isEmpty(modelValue)) {
            return $q.resolve();
          }

          var def = $q.defer();
          $timeout(function() {
            if (usernames.indexOf(modelValue) === -1) {
              def.resolve();
            } else {
              def.reject();
            }
          }, 2000);
          return def.promise;
        }
      }
    }
  })
  app.directive('overwriteEmail', function() {
    var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@example\.com$/i;
    return {
      require: '?ngModel',
      link: function(scope, elm, attrs, ctrl) {
        if (ctrl && ctrl.$validators.email) {
          ctrl.$validators.email = function(modelValue) {
            return ctrl.$isEmpty(modelValue) || EMAIL_REGEXP.test(modelValue);
          }
        }
      }
    }
  })
})();