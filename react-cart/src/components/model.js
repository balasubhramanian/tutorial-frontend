var items = [{name: 'test',price:'44',category:'electornics'}];
 class CartModel{
	

	save(item){
		items.push(item);
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