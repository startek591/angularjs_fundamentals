(function () {
  angular
    .module('ShoppingList')
    .service('WeightLossFilterService', WeightLossFilterService);

  WeightLossFilterService.$inject = ['$q', '$timeout'];
  function WeightLossFilterService($q, $timeout) {
    let service = this;

    service.checkName = function (name) {
      let deferred = $q.defer();

      let result = {
        message: '',
      };

      $timeout(function () {
        if (name.toLowerCase().indexOf('cookie') === -1) {
          deferred.resolve(result);
        } else {
          result.message = 'Stay away from cookies, Jonathan!';
          deferred.reject(result);
        }
      }, 3000);
      return deferred.promise;
    };

    service.checkQuantity = function (quantity) {
      let deferred = $q.defer();
      let result = {
        message: '',
      };

      $timeout(function () {
        if (quantity < 6) {
          deferred.resolve(result);
        } else {
          result.message = "That's too much, Jonathan!";
          deferred.reject(result);
        }
      }, 1000);

      return deferred.promise;
    };
  }
})();
