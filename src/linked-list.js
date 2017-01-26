
const Node = require('./node');



class LinkedList {

    constructor() {
        this.length = 0;
        this.listHead = null;
        this.listTail = null;
    }

    append(data) {
        var node = new Node(data);

        if (this.length == 0) {
            this.listHead = node;
            this.listTail = node;
        }
        else {
            this.listHead.next = node;
            node.prev = this.listTail;
            this.listTail = node;
        }
        this.length++;
    }

    head() {
        return this.listHead.data;
    }

    tail() {
        return this.listTail.data;
    }

    at(index) {
        var currentNode = this.listHead,
            length = this.length,
            count = 0;

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
