(function () {
  const shoppingList1 = [
    'Milk',
    'Donuts',
    'Cookies',
    'Chocolate',
    'Peanut Butter',
    'Pepto Bismol (Chocolate flavor)',
    'Pepto Bismol (Cookie flavor)',
  ];

  const shoppingList2 = [
    {
      name: 'Milk',
      quantity: '2',
    },
    {
      name: 'Donuts',
      quantity: '200',
    },
    {
      name: 'Chocolate',
      quantity: '5',
    },
  ];

  angular
    .module('ShoppingListApp', [])
    .controller('ShoppingListController', ShoppingListController);

  ShoppingListController.$inject = ['$scope'];

  function ShoppingListController($scope) {
    $scope.shoppingList1 = shoppingList1;

    $scope.shoppingList2 = shoppingList2;

    $scope.addToList = function () {
      const newItem = {
        name: $scope.newItemName,
        quantity: $scope.newItemQuantity,
      };
      $scope.shoppingList2.push(newItem);
    };
  }
})();
