(function(){
'use strict';

angular.module('MenuApp')
       .controller('MenuController', MenuController);

MenuController.$inject = ['$scope', 'categories'];

function MenuController($scope, categories){
  var menu = this;

  menu.categories = categories.data;

}

})();
