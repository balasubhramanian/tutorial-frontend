function BinaryTree(){
	var root;

	function Node(data,left,right){
		this.data = data;
		this.next = left;
		this.prev = right;
	}

	function addInternal(node,data){
		if(!node){
			return new Node(data);
		}
		/*
		if(data<node.data){
			var newNode = addInternal(node.left,data)
			if(newNode){
				node.left = newNode;
			}
		}else{
			var newNode = addInternal(node.right,data)
			if(newNode){
				node.right = newNode;
			}
		}*/

		if(data<node.data){
			 node.left = addInternal(node.left,data)
			
		}else{
			 node.right = addInternal(node.right,data)
		}
		return node;
	}

	this.add = function(data){
		if(!root){
			root= new Node(data);
			return;
		}
		addInternal(root,data)
		console.log(root)
	}


	this.addWhile = function(data){
		if(!root){
			root = new Node(data);
		}else{
			var newNode = new Node(data);

			var tmp  = root;
			while(tmp){
				if(tmp.data<data){
					if(tmp.right){
						tmp = tmp.right
					}else{
						tmp.right = newNode;
						break;
					}
				}else{
					if(tmp.left){
						tmp = tmp.left
					}else{
						tmp.left = newNode;
						break;
					}
				}
			}
		}

		console.log(root)

	}

	this.display = function(node){
		console.log(node.data+' ')
	}

	this.preOrder = function (node){
		if(arguments.length == 0) {
			node = root
		}
			if(node == null) return;

			this.display(node)
			this.preOrder(node.left);
			this.preOrder(node.right);
	}

	this.inOrder = function (node){
		if(arguments.length == 0) {
			node = root
		}
			if(node == null) return;

			this.inOrder(node.left);
			this.display(node)
			this.inOrder(node.right);
	}

	this.postOrder = function (node){
		if(arguments.length == 0) {
			node = root
		}
		if(node == null) return;

			this.postOrder(node.left);
			this.postOrder(node.right);
			this.display(node)
			
	}



	this.find = function(){

	}

	this.remove = function(){

	}


}

var tree = new BinaryTree();
tree.add(5);
console.log('------------')
	tree.add(1);
console.log('------------')
 tree.add(3);
 console.log('------------')
 tree.add(4);
 console.log('------------')
tree.add(2);

console.log('Printing data ----------')
//tree.preOrder();
//tree.inOrder();
tree.postOrder();
