(function () {
  angular
    .module('ShoppingListDirectiveApp', [])
    .controller('ShoppingListController1', ShoppingListController1)
    .controller('ShoppingListController2', ShoppingListController2)
    .factory('ShoppingListFactory', ShoppingListFactory)
    .directive('listItem', ListItem)
    .directive('listItemDescription', ListItemDescription);

  function ListItem() {
    const ddo = {
      templateUrl: './listItem.html',
    };
    return ddo;
  }

  function ListItemDescription() {
    const ddo = {
      template: '{{ item.quantity }} of {{ item.name }}',
    };
    return ddo;
  }

  ShoppingListController1.$inject = ['ShoppingListFactory'];
  function ShoppingListController1(ShoppingListFactory) {
    let list = this;
    const shoppingList = ShoppingListFactory();

    list.items = shoppingList.getItems();

    list.itemName = '';
    list.itemQuantity = '';

    list.addItem = function () {
      shoppingList.addItem(list.itemName, list.itemQuantity);
    };

    list.removeItem = function (itemIndex) {
      shoppingList.removeItem(itemIndex);
    };
  }

  ShoppingListController2.$inject = ['ShoppingListFactory'];
  function ShoppingListController2(ShoppingListFactory) {
    let list = this;

    const shoppingList = ShoppingListFactory(3);

    list.itemName = '';
    list.itemQuantity = '';

    list.addItem = function () {
      try {
        shoppingList.addItem(list.itemName, list.itemQuantity);
      } catch (error) {
        list.errorMessage = error.message;
      }
    };

    list.removeItem = function (itemIndex) {
      shoppingList.removeItem(itemIndex);
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
    let factory = function (maxItems) {
      return new ShoppingListService(maxItems);
    };
    return factory;
  }
})();
