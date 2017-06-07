var data = [6,5,3,2,1];

method1();
//on each pass, min the min data and move to left most and increase the index
function method1(){
	var length =data.length;
	for(i=0;i< length-1;i++){
		var min = data[i];
		var minIndex = i;

		for(j=i+1;j<length;j++){
			if(min>data[j]){
				min = data[j];
				minIndex = j
			}	
		}
		swap(data,i,minIndex)
		console.log("Iterating for i : "+i+" - "+data)
	}


}

function swap(arr,i,j){
	var t = arr[i];
	arr[i] = arr[j]
	arr[j] = t   
}