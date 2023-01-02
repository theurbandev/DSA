//  A tree is a non linear data structure. A Binary Search tree is a binary tree in which nodes that have lesser value are stored on the left while the nodes with a higher value are stored at the right.

// ie : RootNode = new Node({ data:7, left:4, right:9 })
class Node {
    constructor(data, left, right){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor(Node){
        this.root = null;
    }

    add(data){
        const node = this.root;
    }
}

let RootNode = new Node(9,5,11 );
console.log(RootNode);