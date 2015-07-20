(function() {
  'use strict';

  angular
    .module('app.order.controller', [
      'ngRoute'
    ])
    .controller('OrderListController', OrderListController)
    .controller('OrderDetailController', OrderDetailController);

  /* @ngInject */
  function OrderListController(OrderService) {
    var vm = this;

    activate();

    function activate() {
      vm.orders = OrderService.getOrderList().query();
    }
  }

  /* @ngInject */
  function OrderDetailController(OrderService, $routeParams) {
    var vm = this;

    activate();

    function activate() {
      console.log($routeParams.orderId);
      vm.order = OrderService.getOrderDetail().query({
        orderId: $routeParams.orderId
      });
    }
  }
})();
