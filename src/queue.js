const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

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
class Queue {

  constructor() {
    this.first = null;
    this.last = null;
  }

  getUnderlyingList() {
    return { value: this.first.value, next: this.first.next };
  }

  isEmpty() {
    return !this.first;
  }

  enqueue(value) {
    let node = new ListNode(value);
    if (this.isEmpty()) {
      this.first = this.last = node
    } else {
      this.last.next = node
      this.last = node
    };
  }

  dequeue() {
    let node = this.first;
    if (!this.isEmpty()) {
      this.first = this.first.next
    };
    if (!this.first) {
      this.last = null
    };
    return node.value;
  }

}


module.exports = {
  Queue
};
