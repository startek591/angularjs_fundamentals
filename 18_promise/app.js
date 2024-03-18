(function () {
  angular
    .module('ShoppingListPromiseApp', [])
    .controller('ShoppingListController', ShoppingListController)
    .service('ShoppingListService', ShoppingListService)
    .service('WeightLossFilterService', WeightLossFilterService);

  ShoppingListController.$inject = ['ShoppingListService'];
  function ShoppingListController(ShoppingListService) {
    let list = this;
    list.items = ShoppingListService.getItems();

    list.itemName = '';
    list.itemQuantity = '';

    list.addItem = function () {
      ShoppingListService.addItem(list.itemName, list.itemQuantity);
    };

    list.removeItem = function (itemIndex) {
      ShoppingListService.removeItem(itemIndex);
    };
  }

  ShoppingListService.$inject = ['$q', 'WeightLossFilterService'];
  function ShoppingListService($q, WeightLossFilterService) {
    let service = this;

    const items = [];

    service.addItem = function (name, quantity) {
      let namePromise = WeightLossFilterService.checkName(name);
      let quantityPromise =
        WeightLossFilterService.checkQuantity(quantity);

      $q.all([namePromise, quantityPromise])
        .then(function (response) {
          const item = {
            name: name,
            quantity: quantity,
          };
          items.push(item);
        })
        .catch(function (errorResponse) {
          console.log(errorResponse.message);
        });
    };

    service.removeItem = function (itemIndex) {
      items.splice(itemIndex, 1);
    };

    service.getItems = function () {
      return items;
    };
  }

  WeightLossFilterService.$inject = ['$q', '$timeout'];
  function WeightLossFilterService($q, $timeout) {
    let service = this;
    service.checkName = function (name) {
      const deferred = $q.defer();

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
      const deferred = $q.defer();

      let result = {
        message: '',
      };

      $timeout(function () {
        if (quantity < 6) {
          deferred.resolve(result);
        } else {
          result.message = "That' too much, Yaakov!";
          deferred.reject(result);
        }
      }, 1000);

      return deferred.promise;
    };
  }
})();
