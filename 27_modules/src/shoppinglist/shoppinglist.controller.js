(function () {
  angular
    .module('ShoppingList')
    .controller('ShoppingListController', ShoppingListController);

  ShoppingListController.$inject = ['ShoppingListFactory'];
  function ShoppingListController(ShoppingListFactory) {
    let list = this;

    let shoppingList = ShoppingListFactory();

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
      this.lastRemoved =
        'Last item removed was ' + this.items[itemIndex].name;
      shoppingList.removeItem(itemIndex);
      this.title = origTitle + ' (' + list.items.length + ' items )';
    };
  }
})();
