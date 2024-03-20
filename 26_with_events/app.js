(function () {
  angular
    .module('ShoppingListEventsApp', [])
    .controller('ShoppingListController', ShoppingListController)
    .factory('ShoppingListFactory', ShoppingListFactory)
    .service('WeightLossFilterService', WeightLossFilterService)
    .component('shoppingList', {
      templateUrl: 'shoppingList.html',
      controller: ShoppingListComponentController,
      bindings: {
        items: '<',
        myTitle: '@title',
        onRemove: '&',
      },
    })
    .component('loadingSpinner', {
      templateUrl: 'spinner.html',
      controller: SpinnerController,
    });

  SpinnerController.$inject = ['$rootScope'];
  function SpinnerController($rootScope) {
    let $ctrl = this;

    let cancelListener = $rootScope.$on(
      'shoppingList:processing',
      function (event, data) {
        console.log('Event: ', event);
        console.log('Data: ', data);

        if (data.on) {
          $ctrl.showSpinner = true;
        } else {
          $ctrl.showSpinner = false;
        }
      }
    );

    $ctrl.$onDestroy = function () {
      cancelListener();
    };
  }

  ShoppingListComponentController.$inject = [
    '$rootScope',
    '$element',
    '$q',
    'WeightLossFilterService',
  ];

  function ShoppingListComponentController(
    $rootScope,
    $element,
    $q,
    WeightLossFilterService
  ) {
    let $ctrl = this;
    let totalItems;

    $ctrl.$onInit = function () {
      totalItems = 0;
    };

    $ctrl.$doCheck = function () {
      if ($ctrl.items.length !== totalItems) {
        totalItems = $ctrl.items.length;

        $rootScope.$broadcast('shoppinglist:processing', {
          on: true,
        });
        let promises = [];
        for (let i = 0; i < $ctrl.items.length; i++) {
          promises.push(
            WeightLossFilterService.checkName($ctrl.items[i].name)
          );
        }

        $q.all(promises)
          .then(function (result) {
            let warningElem = $element.find('div.error');
            warningElem.slideUp(900);
          })
          .catch(function (result) {
            let warningElem = $element.find('div.error');
            warningElem.slideDown(900);
          })
          .finally(function () {
            $rootScope.$broadcast('shoppinglist:processing', {
              on: false,
            });
          });
      }
    };

    $ctrl.remove = function (myIndex) {
      $ctrl.onRemove({ index: myIndex });
    };
  }

  ShoppingListController.$inject = ['ShoppingListFactory'];
  function ShoppingListController(ShoppingListFactory) {
    let list = this;

    let shoppingList = ShoppingListFactory();

    list.items = shoppingList.getItems();
    let origTitle = 'Shopping List #1';
    list.title = origTitle + ' (' + list.items.length + ' items )';

    list.addItem = function () {
      shoppingList.addItem(list.itemName, list.itemQuantity);
      list.title = origTitle + ' (' + list.items.length + ' items )';
    };

    list.removeItem = function (itemIndex) {
      this.lastRemoved =
        'Last item removed was ' + this.items[itemIndex].name;
      shoppingList.removeItem(itemIndex);
      this.title = origTitle + ' (' + list.items.length + ' items )';
    };
  }

  function ShoppingListService(maxItems) {
    let service = this;
    const items = [];

    service.addItem = function (itemName, quantity) {
      if (
        maxItems === undefined ||
        (maxItems !== undefined && items.length < maxItems)
      ) {
        const item = {
          name: itemName,
          quantity: quantity,
        };
        items.push(item);
      } else {
        throw new Error('Max items (' + maxItems + ') reached. ');
      }
    };

    service.removeItem = function (itemIndex) {
      items.splice(itemIndex, 1);
    };

    service.getItems = function () {
      return items;
    };
  }

  function ShoppingListFactory() {
    const factory = function (maxItems) {
      return new ShoppingListService(maxItems);
    };

    return factory;
  }

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
          result.message = 'Stay away from cookies, Jonathan';
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
          result.message = "That's too much, Jonathan";
        }
      }, 1000);

      return deferred.promise;
    };
  }
})();
