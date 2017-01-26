
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
            this.listTail.next = node;
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

    insertAt(index, data) {
        var node = new Node(data);

        var currentNode = this.listHead,
            count = 0;
        while(count < index){
            currentNode = currentNode.next;
            count++;
        }

        if(node.prev != null){
            node.prev = currentNode.prev;
            node.next = currentNode;
            currentNode.prev = node;
            node.prev.next = node;
        }else{
            this.listHead = node;
            node.next = currentNode;
            currentNode.prev = node;
        }
        this.length++;
    }

    isEmpty() {
        if(this.length > 0) return false;
        else return true;
    }

    clear() {
        this.length = 0;
        this.listHead = null;
        this.listTail = null;
    }

    deleteAt(index) {
        var currentNode = this.listHead,
            count = 0;
        while(count < index){
            currentNode = currentNode.next;
            count++;
        }
        currentNode.prev.next = currentNode.next;
        currentNode.next.prev = currentNode.prev;
    }

    reverse() {

    }

    indexOf(data) {
        var currentNode = this.listHead,
            length = this.length,
            count = 0;

        while(count < length){
            if(currentNode.data == data){
                return count;
            }
            currentNode = currentNode.next;
            count++;
        }

    }
}

module.exports = LinkedList;
