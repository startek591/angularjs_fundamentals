(function(){
  function HeroDetailsController() {
  var ctrl = this;

  ctrl.delete = function() {
    ctrl.onDelete({hero: ctrl.hero});
  };

  ctrl.update = function(prop, value) {
    ctrl.onUpdate({hero: ctrl.hero, prop: prop, value: value})
  };
};
angular.module('app').component('heroDetails', {
  templateUrl: 'heroDetails.html',
  controller: HeroDetailsController,
  bindings: {
    hero: '<',
    onDelete: '&',
    onUpdate: '&'
  }
});
})();