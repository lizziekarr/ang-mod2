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
    showItems.adjustLists = MoveItemService.adjust();
    showItems.addItem = MoveItemService.add();
  }

  AlreadyBoughtController.$inject = ['MoveItemService'];
  function AlreadyBoughtController(MoveItemService){
    var showBought = this;
    showBought.itemsBought = MoveItemService.getItemsBought();
  }

  function MoveItemService(){
    var service = this;
    var items = [
      {name: 'bread'},
      {name: 'cheese'},
      {name: 'eggs'},
      {name: 'pasta'},
      {name: 'marinara'},
      {name: 'olive oil'},
      {name: 'basil'}
    ];

    var itemsBought = [];
    service.getItems = function(){
      return items;
    }
    service.getItemsBought = function(){
      return itemsBought;
    }

    service.add = function(){
      return function(itemName){
      var newItem = {
        name: itemName
      }
      items.push(newItem);
    }
  }

    function wasBought(item){
        return item.bought === true;
      }

    service.adjust = function(){
      return function(item){
        if (item.bought === true){
          itemsBought.push(item);
          var i = items.indexOf(item);
          if(i != -1) {
	           items.splice(i, 1);
        }
        }
      }
    }

  }

})();
