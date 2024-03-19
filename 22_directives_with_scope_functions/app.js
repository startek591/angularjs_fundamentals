(function () {
  angular
    .module('ShoppingListDirectiveApp', [])
    .controller('ShoppingListController', ShoppingListController)
    .factory('ShoppingListFactory', ShoppingListFactory)
    .directive('shoppingList', ShoppingListDirective);

  function ShoppingListDirective() {
    const ddo = {
      templateUrl: 'shoppingList.html',
      scope: {
        items: '<',
        myTitle: '@title',
        badRemove: '=',
        onRemove: '&',
      },
      controller: ShoppingListDirectiveController,
      controllerAs: 'list',
      bindToController: true,
    };

    return ddo;
  }

  function ShoppingListDirectiveController() {
    let list = this;

    list.cookiesInList = function () {
      for (let i = 0; i < list.items.length; i++) {
        let name = list.items[i].name;
        if (name.toLowerCase().indexOf('cookie') !== -1) {
          return true;
        }
        return false;
      }
    };
  }

  ShoppingListController.$inject = ['ShoppingListFactory'];
  function ShoppingListController(ShoppingListFactory) {
    let list = this;

    let shoppingList = ShoppingListFactory();

    list.items = shoppingList.getItems();
    let origTitle = 'ShoppingList #1';
    list.title = origTitle + ' (' + list.items.length + ' items )';

    list.itemName = '';
    list.itemQuantity = '';

    list.addItem = function (itemIndex) {
      shoppingList.addItem(list.itemName, list.itemQuantity);
      list.title = origTitle + ' (' + list.items.length + ' items )';
    };

    list.removeItem = function (itemIndex) {
      console.log("'this' is: ", this);
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
