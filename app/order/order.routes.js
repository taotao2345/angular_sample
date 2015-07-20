(function() {
  'use strict';

  angular
    .module('app.order', [
      'app.order.controller',
      'app.order.service',
      'ngRoute'
    ])
    .config(['$routeProvider',
      function($routeProvider) {
        $routeProvider.
        when('/orders', {
          templateUrl: 'partials/list.html',
          controller: 'OrderListController',
          controllerAs: 'vm'
        }).
        when('/orders/:orderId', {
          templateUrl: 'partials/detail.html',
          controller: 'OrderDetailController',
          controllerAs: 'vm'
        }).
        otherwise({
          redirectTo: '/orders'
        });
      }
    ]);
})();
