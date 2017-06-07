


var Stack = function(){
	var items;
	function Node(data,next){
		this.data = data;
		this.next = next;
	}


	this.push = function(data){
		if(!items){
			items = new Node(data);
		}else{
			var newNode = new Node(data,items);
			items = newNode;
		}
	}
	this.pop = function(){

		 var data = items.data;
		 items = items.next 
		 return data;
		 
	}
}


var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())

