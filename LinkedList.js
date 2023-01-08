// visual example of a linked list : {1[2]}->{2[3]}->{3[4]}->{4[5]}
// node -> { 1[2] }
// ^ the first item being the data, and the second item being the pointer to the next nodes value

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next ? next : null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Add head node to linkedList 
  addNodeToList(data) {
    this.head = new Node(data, this.head);
    this.size ++;
  }

  // Insert last node
  insertLast(data) {
    let node = new Node(data);

    // if empty, make the node the head
    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size ++;
  }

  // Insert at index
  insertAt(data, index){
    if(index == 0){
        this.addNodeToList(data);
        return;
    }

    const node = new Node(data);
    let current, previous;

    current = this.head;
    let count = 0;

    while(count < index){
        previous = current; // node b4 previous
        count++;
        current = current.next;
    }
    node.next = current;
    previous.next = node;
    this.size ++;
  }

  // Get at index

  // Remove at index

  // Clear list

  // Print list data
  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  // Get length of linked list
  getLinkedListLength() {
    let currentHead = this.head;
    let count = 1;

    if(!currentHead){
        console.log("Linked List is empty!");
        return;
    };

    while(currentHead.next != null){
        currentHead = currentHead.next;
        count ++;
    } console.log("size of linked list is: " + count);
  }
}


class testLinkedList1{
myLinkedList = new LinkedList;
nodeList = [100, 200, 300, 400, 500];

    addNodes(nodeList){
        for(let i=0; i<this.nodeList.length; i++){
            this.myLinkedList.addNodeToList(this.nodeList[i]);
        };
    }

    getLength(){
        console.log(this.myLinkedList.size);
    }
    
    printListData(){
        this.myLinkedList.printListData();
    }
};

let LinkedList1 = new testLinkedList1();
LinkedList1.addNodes();
LinkedList1.getLength();