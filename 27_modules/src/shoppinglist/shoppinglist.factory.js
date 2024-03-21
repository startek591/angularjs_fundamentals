(function () {
  angular
    .module('ShoppingList')
    .factory('ShoppingListFactory', ShoppingListFactory);

  function ShoppingListFactory() {
    const factory = function (maxItems) {
      return new ShoppingListService(maxItems);
    };

    return factory;
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
})();
