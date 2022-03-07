// Simple Binary Sort Tree

// Create Node Obj 
class Node {
    constructor(element) {
        this.head = element;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
        this.size = 0;
    }

    insert(element) {
        let newNode = new Node(element);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }

        size++;
    }

    insertNode(node, newNode) {
        if (newNode.element < node.element) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    } 
}