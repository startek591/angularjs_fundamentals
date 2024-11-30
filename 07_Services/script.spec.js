describe('SeriveModule', function () {
  var $controller, $rootScope, notify, $window;
  beforeEach(module('myServiceModule'));

  beforeEach(inject(function (
    _$controller_,
    _$rootScope_,
    _notify_,
    _$window_
  ) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    notify = _notify_;
    $window = _$window_;
  }));

  describe('MyController', function () {
    var $scope;

    beforeEach(function () {
      $scope = $rootScope.$new();
      inject(function (_notify_) {
        notify = _notify_;
      });
      $controller('MyController', { $scope: $scope, notify: notify });
    });

    it('should be defined', function () {
      expect($scope.callNotify).toBeDefined();
    });

    it('should call notify with the given message', function () {
      spyOn($scope, 'callNotify').and.callThrough();

      var msg = 'Test message';
      $scope.callNotify(msg);

      expect($scope.callNotify).toHaveBeenCalledWith(msg);
    });
  });

  describe('notify service', function () {
    it('should add messages and trigger alert after 3 messages', function () {
      spyOn($window, 'alert');

      notify('Message 1');
      notify('Message 2');
      notify('Message 3');

      expect($window.alert).toHaveBeenCalledWith(
        'Message 1\nMessage 2\nMessage 3'
      );
    });

    it('should not trigger alert before 3 messages', function () {
      spyOn($window, 'alert');

      notify('Message 1');
      notify('Message 2');

      expect($window.alert).not.toHaveBeenCalled();
    });
  });
});
