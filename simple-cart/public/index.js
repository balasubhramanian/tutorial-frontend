function hideAll(){
	$('.add-product').hide();
	$('.list').hide();
	$('.edit-product').hide();

}

function showList(){
	hideAll();
	$('.list').show();

}

function showAdd(){
	hideAll();
	$('.add-product').show();

}

function showEdit(){
	hideAll();
	$('.edit-product').show();

}
showList();