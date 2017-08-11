(function(){
'use strict';
angular.module('data')
       .service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService($http){
  var menu = this;

  menu.getAllCategories = function(){
    return $http({
      method: 'GET',
      url: 'https://davids-restaurant.herokuapp.com/categories.json'
    });
  };

  menu.getItemsForCategory = function(categoryShortName){
    return $http({
      method: 'GET',
      url: 'https://davids-restaurant.herokuapp.com/categories.json',
      params: {
        category: categoryShortName
      }
    })
  };
}


})();
