(function(){

'use strict';

var app = angular.module('app', []);

app.controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('MoveItemService', MoveItemService);

  ToBuyController.$inject = ['MoveItemService'];
  function ToBuyController(MoveItemService){
    var showItems = this;
    showItems.itemsToBuy = MoveItemService.getItems();
  }

  AlreadyBoughtController.$inject = ['MoveItemService'];
  function AlreadyBoughtController(MoveItemService){
    var showBought = this;
    showBought.itemsBought = MoveItemService.getItemsBought();
  }

  function MoveItemService(){
    var service = this;
    var items = ['bread', 'cheese', 'eggs', 'milk', 'cinnamon'];
    var itemsBought = [];
    service.getItems = function(){
      return items;
    }
    service.getItemsBought = function(){
      return itemsBought;
    }
  }


})();
