(function(){
	'use strict';
	var app = angular.module('myApp');
	app.controller('MyLand',MyLand);

	function MyLand($http)
	{
		var vm = this;
		this.mydata = [];
	 
		vm.search = function(){
			if(vm.searchText !== undefined)
			{
			$http.get('data.json').then(function(pdata){
        	vm.mydata = pdata.data;
		})
	} else {
		alert('No Zip Code entered');
	}
		}
	}
})();