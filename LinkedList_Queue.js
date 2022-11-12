const LinkedList = require('./LinkedList');

class LinkedList_Queue {
    constructor() {
        this.list = new LinkedList();
    }

    enqueue(element) {
        return this.list.append(element);
    }
    
    dequeue() {
        return this.list.removeFromFront()
    }
    
    isEmpty() {
        return this.list.isEmpty()
    }

    peek() {
        if (this.isEmpty()) {
            return 'queue is empty'
        } else {
            return this.list.head.value
        }
    }

    size() {
        return this.list.getSize()
    }
    
    print() {
        return this.list.print()
    }

}

const queue = new LinkedList_Queue();

queue.enqueue(10);
queue.enqueue(20)
queue.enqueue(30);
console.log(queue.peek())
console.log(queue.print())
console.log(queue.size())
queue.dequeue();

console.log(queue.peek())
console.log(queue.print())
console.log(queue.size())
queue.dequeue();
console.log(queue.size())

queue.dequeue();
console.log(queue.size())

