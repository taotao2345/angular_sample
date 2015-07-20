(function() {
  'use strict';

  angular
    .module('app.order.service', ['ngResource'])
    .service('OrderService', OrderService);

  OrderService.$inject = ['$resource'];

  function OrderService($resource) {
    return {
      getOrderList: getOrderList,
      getOrderDetail: getOrderDetail
    };

    function getOrderList() {
      return $resource('data/orders/orders.json', {}, {
        query: {
          method: 'GET',
          params: {},
          isArray: true
        }
      });
    }

    function getOrderDetail() {
      return $resource('data/orders/:orderId.json', {}, {
        query: {
          method: 'GET',
          params: {},
          isArray: false
        }
      });
    }
  }
})();
