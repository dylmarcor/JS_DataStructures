// Simple Linked List example

// Create Node Obj
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Create Linked List Class
class LinkedList {
    constructor() {
        this.head = null; // first Node in list
        this.size = 0;  // number of Nodes in list
    }

    add(val) {
        let node = new Node(val); // create a new Node

        let current;  // for storing current Node

        if (this.head === null) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
}