const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  console.log(l)

let nodes = [];
function toArray(l) {
   let currentNode = l;
  while (currentNode) {
    nodes.push(currentNode.value);
    currentNode = currentNode.next;
  }
  return nodes;
}
toArray(l)
nodes = nodes.filter((n) => {return n != k});



function convertArrayList(arr) {
  return arr.reduce((acc, cur) => {
    if (acc) {
      const node = new ListNodes(cur);
      node.next = acc;
      return node;
    }
    return new ListNodes(cur);
  }, null);
}




class ListNodes {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
nodes = nodes.reverse()
return convertArrayList(nodes)
}




module.exports = {
  removeKFromList
};
