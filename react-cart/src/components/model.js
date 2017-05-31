var items = [{name: 'test',price:'44',category:'electornics'}];
 class CartModel{
	

	save(item){
		return new Promise(function(resolve, reject) {  
		   setTimeout(() => {
		   	items.push(item);
		   	resolve()
		   }, 2000);
		});
		
	}

	get(){
		return new Promise(function(resolve, reject) {  
		   setTimeout(() => {
		   	resolve(items)
		   },2000);
		});
	}

}
export default new CartModel();