describe('FilterController', function () {
  var $controller;
  var $scope;
  var controller;
  var filterFilter;

  beforeEach(module('FilterInControllerModule'));

  beforeEach(inject(function (
    _$controller_,
    _$rootScope_,
    _filterFilter_
  ) {
    $controller = _$controller_;
    $scope = _$rootScope_.$new();
    filterFilter = _filterFilter_;

    controller = $controller('FilterController', {
      $scope: $scope,
      filterFilter: filterFilter,
    });
  }));

  it('should initialize the array correctly', function () {
    expect(controller.array.length).toBe(6);
    expect(controller.array[0].name).toBe('Tobias');
    expect(controller.array[1].name).toBe('Jeff');
    expect(controller.array[2].name).toBe('Brian');
  });

  it('should filter the array correctly', function () {
    expect(controller.filteredArray.length).toBe(4);
    expect(controller.filteredArray[0].name).toBe('Tobias');
    expect(controller.filteredArray[1].name).toBe('Brian');
    expect(controller.filteredArray[2].name).toBe('James');
    expect(controller.filteredArray[3].name).toBe('Brad');
  });

  it('should return an empty array if no names matches the filter', function () {
    controller.filteredArray = filterFilter(controller.array, 'z');
    expect(controller.filteredArray.length).toBe(0);
  });

  it('should update the filtered array when filter term is changed', function () {
    controller.filteredArray = filterFilter(controller.array, 'b');
    expect(controller.filteredArray.length).toBe(3);
    expect(controller.filteredArray[0].name).toBe('Tobias');
    expect(controller.filteredArray[1].name).toBe('Brian');
    expect(controller.filteredArray[2].name).toBe('Brad');
  });
});
