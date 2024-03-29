(function () {
  const shoppingList = [
    'Milk',
    'Donuts',
    'Cookies',
    'Peanut Butter',
    'Pepto Bismol',
    'Pepto Bismol (Chocolate flavor)',
    'Pepto Bismol (Cookie flavor)',
  ];

  angular
    .module('ShoppingListApp', [])
    .controller('ShoppingListController', ShoppingListController);

  ShoppingListController.$inject = ['$scope'];
  function ShoppingListController($scope) {
    $scope.shoppingList = shoppingList;
  }
})();
