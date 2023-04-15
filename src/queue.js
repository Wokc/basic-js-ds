const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */


// class Node {
//   constructor(data) {
//       this.value = data;
//       this.next = null; 
//   }
// }

class Queue {

  constructor(){
    this.head = null;
}

  getUnderlyingList() {
    return   this.head
  }

  enqueue(value) {
    let newNode = new ListNode(value);
    if (this.head == null){
      this.head = newNode
    }
    else {
      this.insertNode(this.head, newNode)
    }
  }

    insertNode(node, newNode){
      if (node.next === null) {
        node.next = newNode;
    } else {
        this.insertNode(node.next, newNode);
    }
  }

  dequeue() {
    const deleted = this.head;
    let node = this.head.next;
    this.head = node;
    return deleted.value

  }
}

module.exports = {
  Queue
};
