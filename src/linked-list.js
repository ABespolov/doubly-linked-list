
const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
    }

    append(data) {
        var node = {
            value: value,
            next: null,
            prev: null,
        }

        if (this.length == 0) {
            this.head = node;
        }
        else {
            this.head.next = node;
            node.prev = this.head;
            this.head = node;
        }
        this.length++;
    }

    head() {}

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
