(function () {
  'use strict';

  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'src/menuapp/templates/categoryitemslist.template.html',
    bindings: {
      items: '<'
    }
  });

})();
