(function(){
  'use strict';
  
  angular.module('MenuApp')
         .config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider){

  //Redirect to home if no other URL matches
  $urlRouterProvider.otherwise('/home');

  //Set up UI States
  $stateProvider
    .state('home', {
      url: '/home',
      template: '<button ui-sref="categories">take me to menu categories</button>'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'categories.html',
      controller: 'MenuController as menu',
      resolve: {
        categories: ['MenuDataService', function(MenuDataService){
          return MenuDataService.getAllCategories();
        }]
      }
    })

    .state('categories.items', {
      url: '/items/{shortName}',
      templateUrl: 'items.html'
    });

}

})();
