const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
    constructor(data) {
        this.data = data;
        this.left = null;   
        this.right = null; 
    }
}
class BinarySearchTree {
    constructor() {
        this.rooten = null; 
    }
    root() {
        return this.rooten
    }

    add(data) {
        let newNode = new Node(data);
        if (this.rooten === null) {
            this.rooten = newNode;
        } else {
            this.insertNode(this.rooten, newNode);
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
    has(data) {
        if (this.find(data) != null){
            return true;
        }
        else {
        return false
        }
    }

    find(data) {
        let node
        if (arguments.length > 1){
            node = arguments[1];
        }
        else {
            node = this.rooten
        }
    
    
            
        if(node === null) {
            return null;
        } else if (data < node.data) {
            return this.find(data,node.left);
        } else if (data > node.data) {
            return this.find(data, node.right);
        } else {
            return node;
        }
    }

    minNode(node) {
        if (node.left === null)
            return node;
        else
            return this.minNode(node.left);
    }

    remove(data) {
        this.rooten = this.removeNode(this.rooten, data); // helper method below
    }
    removeNode(node, data) {
   
        if (node === null) {
            return null;
        // если данные, которые нужно удалить, меньше, чем данные корня, переходим к левому поддереву
        } else if (data < node.data) {
            node.left = this.removeNode(node.left, data);
            return node;
        // если данные, которые нужно удалить, больше, чем данные корня, переходим к правому поддереву
        } else if (data > node.data) {
            node.right = this.removeNode(node.right, data);
            return node;
        // если данные такие как данные корня, удаляем узел
        } else {
            // удаляем узел без потомков (листовой узел (leaf) или крайний)
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            // удаляем узел с одним потомком
            if (node.left === null) {
                node = node.right;
                return node;
            } else if(node.right === null) {
                node = node.left;
                return node;
            }
            // удаляем узел с двумя потомками
            // minNode правого поддерева хранится в новом узле
            let newNode = this.minNode(node.right);
            node.data = newNode.data;
            node.right = this.removeNode(node.right, newNode.data);
            return node;
        }
    }


    min() {
        if (this.rooten.left === null){
            return null
    
        }
        else {
            let node = this.rooten
            while(node.left != null){
                node = node.left
            }
            return node.data
        }
        }    
    
      max() {
        if (this.rooten.right === null){
            return null
    
        }
        else {
            let node = this.rooten
            while(node.right != null){
                node = node.right
            }
            return node.data
        }
        }
    }
module.exports = {
    BinarySearchTree,
};
