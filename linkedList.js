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

    // add a Node at certain index on Linked List
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

    // remove a Node at certain index on Linked List
    removeFrom(val, index) {
        if (index < 0 || index > this.size) {
            throw console.error("Please enter a valid index")
        } else {
            let curr, prev, iter = 0;
            curr = this.head;
            prev = curr;

            if (index === 0) {
                this.head = curr.next;
            } else {
                while (iter < index) {
                    iter++;
                    prev = curr;
                    curr = curr.next;
                }

                prev.next = curr.next;
            }

            this.size--;

            return curr.val;
        }
    }

    // remove specific Node from Linked List
    removeVal(val) {
        let curr = this.head;
        let prev = null;

        while (curr != null) {
            if (curr.val === val) {
                if (prev === null) {
                    this.head = curr.next;
                } else {
                    prev.next = curr.next;
                }
                this.size--;
                return curr.val;
            }
            prev = curr;
            curr = curr.next;
        }
        return -1; // if not found
    }

    // Helper Methods

    // find index of an element
    indexOf(val) {
        let count = 0;
        let curr = this.head;

        while (curr != null) {
            if (curr.val === val) {
                return count;
            }
            count++;
            curr = curr.next;
        }

        return -1; // if not found
    }

    // checks if the list is empty
    isEmpty() {
        return this.size === 0;
    }

}