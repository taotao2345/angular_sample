(function() {
  'use strict';

  angular
    .module('app.order', [
      'app.order.controller',
      'app.order.service',
      'ui.router'
    ])
    .config(['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/order');
        $stateProvider
          .state('order', {
            url: '/order',
            views: {
              '@': {
                templateUrl: 'partials/list.html',
                controller: 'OrderListController',
                controllerAs: 'vm'
              }
            }
          })
          .state('order.detail', {
            url: '/:orderId',
            views: {
              '@': {
                templateUrl: 'partials/detail.html',
                controller: 'OrderDetailController',
                controllerAs: 'vm'
              }
            }
          })
          .state('otherwise', {
            url: '/order'
          });
      }
    ]);
})();
