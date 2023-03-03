(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('CategoryItemsController', CategoryItemsController);

  CategoryItemsController.$inject = ['item']
  function CategoryItemsController(item) {
    var itemsCtrl = this;
    itemsCtrl.items = item.data.menu_items;
  }

})();
