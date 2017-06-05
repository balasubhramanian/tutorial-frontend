import types from '../constants'

export function fetchAllItems(){
	return {type : types.FETCH_ALL_ITEMS}
}

export function testAction(){
	return {type : types.TEST_ACTION}
}
