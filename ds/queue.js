


var Queue = function(){
	var items;

	function Node(data,next){
		this.data = data;
		this.next = next;
	}

	this.enqueue = function(data){
		if(!items){
			items = new Node(data);
		}else{
			var newNode = new Node(data);
			var temp = items;
			while(temp.next){
				temp = temp.next
			}
			temp.next = newNode;
		}
	}

	this.dequeue = function(){

		 var data = items.data;
		 items = items.next 
		 return data;
	}
}


var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())

