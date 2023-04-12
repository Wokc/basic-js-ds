const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
    constructor(data) {
        this.data = data; // node value
        this.left = null;   // left node child reference
        this.right = null; // right node child reference
    }
}
class BinarySearchTree {
    constructor() {
        this.rooten = null; // корень bst
    }
    root() {
        return this.rooten
    }

    add(data) {
        let newNode = new Node(data);
        if (this.rooten === null) {
            this.rooten = newNode;
        } else {
            this.insertNode(this.rooten, newNode); // helper method below
        }
    }
    
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
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
    has(/* data */) {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    find(/* data */) {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    remove(/* data */) {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    min() {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }

    max() {
        throw new NotImplementedError('Not implemented');
        // remove line with error and write your code here
    }
}

module.exports = {
    BinarySearchTree,
};
