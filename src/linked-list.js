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
        return this;
    }

    head() {
        if(this._head == null){
            return null;
        }
        return this._head.data;
    }

    tail() {
        if(this._tail == null){
            return null;
        }
        return this._tail.data;
    }

    at(index) {
        var currentNode = this._head,
            length = this.length,
            count = 0;

        while(count < index){
            currentNode = currentNode.next;
            count++;
        }
        return currentNode.data;
    }

    insertAt(index, data) {
        var node = new Node(data);

        var currentNode = this._head,
            count = 0;
        while(count < index){
            currentNode = currentNode.next;
            count++;
        }

        if(currentNode == null){
            currentNode = node;
        }else{
            node.prev = currentNode.prev;
            node.next = currentNode;
            currentNode.prev = node;
            if(node.prev != null){
                node.prev.next = node;
            }
        }

        this.length++;

        return this;
    }

    isEmpty() {
        if(this.length > 0) return false;
        else return true;
    }

    clear() {
        this.length = 0;
        this._head = null;
        this._tail = null;

        return this;
    }

    deleteAt(index) {
        var currentNode = this._head,
            count = 0;
        while(count < index){
            currentNode = currentNode.next;
            count++;
        }
        if(currentNode.next == null && currentNode.prev == null){
            currentNode = null;
        }else{

            currentNode.prev.next = currentNode.next;
            currentNode.next.prev = currentNode.prev;
        }

        return this;
    }

    reverse() {
        return this;
    }

    indexOf(data) {
        var currentNode = this._head,
            length = this.length,
            count = 0;

        while(count < length){
            if(currentNode.data == data){
                return count;
            }
            currentNode = currentNode.next;
            count++;
        }
        return -1;
    }
}


module.exports = LinkedList;
