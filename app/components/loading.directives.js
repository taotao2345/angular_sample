/* doing...

(function() {
  'use strict';

  angular
    .module('shared.loading')
    .directive('loading', loading);

  function loading($timeout) {
    var directive = {
      restrict: 'E',
      replace: true,
      scope: {},
      template: '<div>loading</div>',
      link: function(scope, element, attrs) {
        $timeout(function() {
          element.remove();
        }, 5000);
      }
    };

    return directive;
  }
})();
*/
