var items = [{name: 'test',price:'44',category:'electornics'}];
 class CartModel{
	

	save(item){
		items.push(item);
	}

	get(){
		return items;
	}

}
export default new CartModel();