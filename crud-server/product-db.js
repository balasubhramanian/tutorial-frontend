var defaults = require('./default');

var products = defaults.product;

var api = {
	save : function(item){
		products.push(item);
	},
	find : function(attr,value){
		if(!attr) return products;

		var filtered = products.filter(function(product){
			return product[attr] == value;
		})

		return filtered;


	},

	delete : function(key,value){

	},
	deleteAll : function(){
		products = [];	
	},

}

module.exports = api;
