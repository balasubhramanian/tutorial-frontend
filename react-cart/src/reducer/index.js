import cartModel from '../store/model.js';
import types from '../constants';

var initalData = cartModel.get();
export default function fetchAllItems(state = initalData,action = {}){
	switch(action.type){
		case types.FETCH_ALL_ITEMS : 
			return cartModel.get();
		case types.TEST_ACTION : 
			alert('reducer  called ')
			return state;	
		default:
			return state;
	}
}


