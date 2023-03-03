(function () {
'use strict';

angular.module('data')
.controller('ItemDetailController', ItemDetailController);

// 'item' is injected through state's resolve
ItemDetailController.$inject = ['$stateParams', 'item', '$scope'];
function ItemDetailController($stateParams, item, $scope) {
    
    var itemDetail = this;
    itemDetail.name = $stateParams.itemId;

    var i;
    var bloque = [];

    for (i = 0; i < item.length; i++) 
    { 
        bloque.push('('+item[i].short_name+'): '+item[i].name+' ['+item[i].description+'] Large portion: '+item[i].price_large+' $ ');
    }
    $scope.bloque = bloque;
}

})();
