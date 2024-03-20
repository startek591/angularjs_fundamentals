(function () {
  angular
    .module('ShoppingListComponentApp', [])
    .controller('ShoppingListController', ShoppingListController)
    .factory('ShoppingListFactory', ShoppingListFactory)
    .component('shoppingList', {
      templateUrl: 'shoppingList.html',
      controller: ShoppingListComponentController,
      bindings: {
        items: '<',
        myTitle: '@title',
        onRemove: '&',
      },
    });

  ShoppingListComponentController.$inject = ['$scope', '$element'];
  function ShoppingListComponentController($scope, $element) {
    let $ctrl = this;

    $ctrl.cookiesInList = function () {
      for (let i = 0; i < $ctrl.items.length; i++) {
        let name = $ctrl.items[i].name;
        if (name.toLowerCase().indexOf('cookie') !== -1) {
          return true;
        }
      }
      return false;
    };

    $ctrl.remove = function (myIndex) {
      $ctrl.onRemove({ index: myIndex });
    };

    $ctrl.$onInit = function () {
      console.log('We are in $onInit()');
    };

    $ctrl.$onChanges = function (changeObj) {
      console.log('Changes: ', changeObj);
    };

    $ctrl.$postLink = function () {
      $scope.$watch(
        '$ctrl.cookiesInList()',
        function (newValue, oldValue) {
          console.log($element);
          if (newValue === true) {
            let warningElem = $element.find('div.error');
            warningElem.slideDown(900);
          } else {
            let warningElem = $element.find('div.error');
            warningElem.slideUp(900);
          }
        }
      );
    };
  }

  ShoppingListController.$inject = ['ShoppingListFactory'];
  function ShoppingListController(ShoppingListFactory) {
    let list = this;
    let shoppingList = ShoppingListFactory();

    list.items = shoppingList.getItems();
    let origTitle = 'ShoppingList List #1';
    list.title = origTitle + ' (' + list.items.length + ' items )';

    list.itemName = '';
    list.itemQuantity = '';

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
        throw new Error('Max items (' + maxItems + ') reached.');
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
})();
