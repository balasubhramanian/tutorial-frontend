var data = prepareData();
console.log(data)

method1();
var data = prepareData();
console.log('method 3')
method3();

//check for the adjacent elements and swap the lower
function method1(){
	for(var i = 0 ; i<data.length-1 ; i++){
	 for(var j = i+1 ; j<data.length ; j++){
	 	if(data[i] > data[j]){ 
	 		swap(data,i,j);
	 	}
	 	console.log("Iterating j : "+j+" for i : "+i+" - "+data)
	 }
	 console.log("Completing one iteration for"+i+" - "+data)	
	}
}

function method2(){
	for(var i = data.length-1 ; i>0 ; i--){
	 for(var j = i-1 ; j>-1 ; j--){
	 	if(data[i] < data[j]){
	 		swap(data,i,j);
	 	}
	 	console.log("Iterating j : "+j+" for i : "+i+" - "+data)
	 }
	 console.log("Completing one iteration for"+i+" - "+data)	
	}
}

function method3(){
	for(var i = 0 ; i<data.length-1 ; i++){
	 for(var j = 1 ; j<data.length ; j++){
	 	if(data[j-1] > data[j]){
	 		swap(data,i,j);
	 	}
	 	console.log("Iterating j : "+j+" for i : "+i+" - "+data)
	 }
	 console.log("Completing one iteration for"+i+" - "+data)	
	}
}

function swap(arr,i,j){
	var t = arr[i];
	arr[i] = arr[j]
	arr[j] = t   
}
function prepareData(){
	// var d = [];
	// for(1...10)
	// d.push(parseInt(Math.random()*10))
	return [6,5,3,2,1];
}