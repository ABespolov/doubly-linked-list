
const Node = require('./node');

class LinkedList {

    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    append(data) {
        var node = new Node(data);

        if (this.length == 0) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.head.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
    }

    head() {
        return this.head.data;
    }

    tail() {
        return this.head.tail;
    }

    at(index) {
        var currentNode = this.head,
            length = this.length,
            count = 1;

        while(count < index){
            currentNode = currentNode.next;
            count++;
        }
        return currentNode.data;
    }

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
