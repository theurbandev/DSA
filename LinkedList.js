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

  // Insert first node
  insertHead(data) {
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
        this.insertHead(data);
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
}

let myLinkedList = new LinkedList();

myLinkedList.insertHead(100);
myLinkedList.insertHead(200);
myLinkedList.insertHead(300);
myLinkedList.insertLast(900);
myLinkedList.insertAt(302, 2);

console.log("size of linked list is: " + myLinkedList.size);
myLinkedList.printListData();
