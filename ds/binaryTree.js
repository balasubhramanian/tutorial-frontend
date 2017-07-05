function BinaryTree() {
    var root;

    function Node(data, left, right) {
        this.data = data;
        this.next = left;
        this.prev = right;
    }

    function addInternal(node, data) {
        if (!node) {
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

        if (data < node.data) {
            node.left = addInternal(node.left, data)

        } else {
            node.right = addInternal(node.right, data)
        }
        return node;
    }

    this.add = function(data) {
        if (!root) {
            root = new Node(data);
            return;
        }
        addInternal(root, data)
        console.log(root)
    }


    this.addWhile = function(data) {
        if (!root) {
            root = new Node(data);
        } else {
            var newNode = new Node(data);

            var tmp = root;
            while (tmp) {
                if (tmp.data < data) {
                    if (tmp.right) {
                        tmp = tmp.right
                    } else {
                        tmp.right = newNode;
                        break;
                    }
                } else {
                    if (tmp.left) {
                        tmp = tmp.left
                    } else {
                        tmp.left = newNode;
                        break;
                    }
                }
            }
        }

        console.log(root)

    }

    this.display = function(node) {
        console.log(node.data + ' ')
    }

    this.preOrder = function(node) {
        if (arguments.length == 0) {
            node = root
        }
        if (node == null) return;

        this.display(node)
        this.preOrder(node.left);
        this.preOrder(node.right);
    }

    this.inOrder = function(node) {
        if (arguments.length == 0) {
            node = root
        }
        if (node == null) return;

        this.inOrder(node.left);
        this.display(node)
        this.inOrder(node.right);
    }

    this.postOrder = function(node) {
        if (arguments.length == 0) {
            node = root
        }
        if (node == null) return;

        this.postOrder(node.left);
        this.postOrder(node.right);
        this.display(node)

    }



    this.find = function() {

    }

    this.remove = function(data) {
        root = this.removeInternal(root, data)
        console.log(root)
    }

    this.removeInternal = function(node, data) {
        if (node == null) {
            return null;
        }
        if (node.data == data) {
            //case 1 : no children
            if (node.left == null && node.right == null) {
                return null
            }

            //case 2 : one child
            if (node.left == null) {
                return node.right
            }

            if (node.right == null) {
                return node.left
            }
            //case 3 : 2 children
            /**
             * find the smallest of the right or largest of left
             * replace the data and ref
             * delete the smallest
             */
             var smallestNode = this.findSmallestNode(node.right);

             node.data = smallestNode.data;
             node.right  = this.removeInternal(node.right,smallestNode.data);
             return node;



        } else if (data < node.data) {
            node.left = this.removeInternal(node.left, data)
        } else {
            node.right = this.removeInternal(node.right, data)
        }

        return node;

    }

    this.findSmallestNode = function(node){
        var smallestNode = node;
        var tmp = node.left
        while(tmp){
            if(tmp.data<smallestNode.data){
                smallest = tmp;
            }
            tmp = tmp.left;
        }
        return smallestNode;
    }


    this.removeInternal1 = function(parent, node, data) {
        if (node.data == data) {


            //case 1 - no childer
            if (node.left == null && node.right == null) {
                if (parent.left && parent.left.data == data) {
                    parent.left = null
                }
                if (parent.right && parent.right.data == data) {
                    parent.right = null;
                }
            }

            //case 2 - one child
            else if (node.left == null || node.right == null) {
                if (node.left) {
                    if (parent.left && parent.left.data == data) {
                        parent.left = node.left
                    }
                    if (parent.right && parent.right.data == data) {
                        parent.right = node.left;
                    }
                } else {
                    if (parent.left && parent.left.data == data) {
                        parent.left = node.right
                    }
                    if (parent.right && parent.right.data == data) {
                        parent.right = node.right;
                    }
                }
            }

            //case 3
            else {

            }

        } else {

            if (data < node.data) {
                this.removeInternal(node, node.left, data)
            } else {
                this.removeInternal(node, node.right, data)
            }
        }


    }


}

var tree = new BinaryTree();
tree.add(5);
tree.add(3);
tree.add(4);
tree.add(2);
tree.add(1);
tree.add(7);

console.log('Printing data ----------')
    //tree.preOrder();
    //tree.inOrder();
    //tree.postOrder();

tree.remove(5)
//console.log(tree.smallestNode())