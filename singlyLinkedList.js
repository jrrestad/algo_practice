class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    // Will return true if this.head is null, false if it isn't...
    isEmpty() {
        return this.head === null;
    }

    insertAtTail(data) {
        const newTail = Node(data);
        if (this.isEmpty()) {
            return this;
        }
        let runner = this.head;
        while (runner.next !== null) {
            runner = runner.next;
        }
        runner.next = newTail
        return this;
    }
}