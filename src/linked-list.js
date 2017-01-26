const Node = require('./node');


class LinkedList {

    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data);

        if (this.length == 0) {
            this._head = node;
            this._tail = node;
        }
        else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        this.length++;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        var currentNode = this._head,
            length = this.length,
            count = 0;

        while (count < index) {
            currentNode = currentNode.next;
            count++;
        }
        return currentNode.data;
    }

    insertAt(index, data) {
        var node = new Node(data);

        var currentNode = this._head,
            count = 0;
        while (count < index) {
            currentNode = currentNode.next;
            count++;
        }


        node.prev = currentNode.prev;
        node.next = currentNode;
        currentNode.prev = node;
        node.prev.next = node;

        this.length++;

    }

    isEmpty() {
        if (this.length > 0) return false;
        else return true;
    }

    clear() {
        this.length = 0;
        this._head.data = null;
        this._tail.data = null;
    }

    deleteAt(index) {
        var currentNode = this._head,
            count = 0;
        while (count < index) {
            currentNode = currentNode.next;
            count++;
        }
        currentNode.prev.next = currentNode.next;
        currentNode.next.prev = currentNode.prev;
    }

    reverse() {

    }

    indexOf(data) {
        var currentNode = this._head,
            length = this.length,
            count = 0;

        while (count < length) {
            if (currentNode.data == data) {
                return count;
            }
            currentNode = currentNode.next;
            count++;
        }
        return -1;
    }
}

module.exports = LinkedList;
