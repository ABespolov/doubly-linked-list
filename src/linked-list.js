
const Node = require('./node');

class LinkedList {

    constructor() {
        this.length = 0;
        this.head = null;
    }

    append(data) {
        var node = new Node();

        if (this.length == 0) {
            this.head = node;
            node.data = data;
        }
        else {
            this.head.next = node;
            node.prev = this.head;
            this.head = node;
            node.data = data;
        }
        this.length++;
    }

    head() {
        return this.head.data;
    }

    tail() {}

    at(index) {}

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
