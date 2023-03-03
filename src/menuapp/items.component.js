(function () {
'use strict';

angular.module('data')
.component('items', {
  templateUrl: 'src/menuapp/templates/item-detail.template.html',
  bindings: {
    items: '<'
  }
});

})();
