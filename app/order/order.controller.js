(function() {
  'use strict';

  angular
    .module('app.order.controller', [
      'ui.router'
    ])
    .controller('OrderListController', OrderListController)
    .controller('OrderDetailController', OrderDetailController);

  function OrderListController(OrderService) {
    var vm = this;

    activate();

    function activate() {
      vm.orders = OrderService.getOrderList().query();
    }
  }

  function OrderDetailController(OrderService, $stateParams) {
    var vm = this;

    activate();

    function activate() {
      vm.order = OrderService.getOrderDetail().query({
        orderId: $stateParams.orderId
      });
    }
  }
})();
