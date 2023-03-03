(function () {
  'use strict';

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    // *** Set up UI states ***
    $stateProvider

    // Home page
    .state('home', {
      url: '/',
      templateUrl: 'src/menuapp/templates/home.template.html'
    })

    // categories list page
    .state('categories', {
      url: '/categories',
      templateUrl: 'src/menuapp/templates/categories.template.html',
      controller: 'CategoriesController as categories',
      resolve: {
        items: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('items', {
      url: 'https://coursera-jhu-default-rtdb.firebaseio.com/categories.json',
      templateUrl: 'src/menuapp/templates/items.template.html',
      controller: 'CategoryItemsController as itemsCtrl',
      resolve: {
        item: ['$stateParams', 'MenuDataService',
        function ($stateParams, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }]
      }
    });
  }

})();
