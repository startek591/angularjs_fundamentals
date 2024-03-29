(function () {
  angular
    .module('ShoppingListDirectiveApp', [])
    .controller('ShoppingListController1', ShoppingListController1)
    .controller('ShoppingListController2', ShoppingListController2)
    .factory('ShoppingListFactory', ShoppingListFactory)
    .directive('shoppingList', ShoppingList);

  function ShoppingList() {
    const ddo = {
      templateUrl: 'shoppingList.html',
      scope: {
        list: '=myList',
        title: '@title',
      },
    };

    return ddo;
  }

  ShoppingListController1.$inject = ['ShoppingListFactory'];
  function ShoppingListController1(ShoppingListFactory) {
    let list = this;
    const shoppingList = ShoppingListFactory();

    list.items = shoppingList.getItems();
    let origTitle = 'Shopping List #1';
    list.title = origTitle + ' (' + list.items.length + ' items )';

    list.itemName = '';
    list.itemQuantity = '';

    list.addItem = function () {
      shoppingList.addItem(list.itemName, list.itemQuantity);
      list.title = origTitle + ' (' + list.items.length + ' items )';
    };

    list.removeItem = function (itemIndex) {
      shoppingList.removeItem(itemIndex);
      list.title = origTitle + ' (' + list.items.length + ' items )';
    };
  }

  ShoppingListController2.$inject = ['ShoppingListFactory'];
  function ShoppingListController2(ShoppingListFactory) {
    let list = this;
    const shoppingList = ShoppingListFactory(3);

    list.items = shoppingList.getItems();
    let origTitle = 'Shopping List #2';
    list.title = origTitle + ' (' + list.items.length + ' items )';

    list.itemName = '';
    list.itemQuantity = '';

    list.addItem = function () {
      shoppingList.addItem(list.itemName, list.itemQuantity);
      list.title = origTitle + ' (' + list.items.length + ' items )';
    };

    list.removeItem = function (itemIndex) {
      shoppingList.removeItem(itemIndex);
      list.title = origTitle + ' (' + list.items.length + ' items )';
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
