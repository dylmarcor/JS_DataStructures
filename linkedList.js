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

    insertAt(val, index) {
        if (index < 0 || index > this.size) {
            throw console.error("Please enter a valid index");
        } else {
            let node = new Node(val);
            let curr, prev;

            curr = this.head;

            if (index === 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                let iter = 0;

                while (iter < index) {
                    iter++;
                    prev = curr;
                    curr = curr.next;
                }

                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }

    
}