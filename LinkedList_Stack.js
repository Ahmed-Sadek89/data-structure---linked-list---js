const LinkedList = require('./LinkedList');

class LinkedList_Stack {
    constructor() {
        this.list = new LinkedList();
    }

    push(element) {
        return this.list.prepend(element);
    }
    
    pop() {
        return this.list.removeFromFront()
    }
    
    isEmpty() {
        return this.list.isEmpty()
    }

    peek() {
        if (this.isEmpty()) {
            return 'stack is empty'
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

const stack = new LinkedList_Stack();

stack.push(10);
stack.push(20)
stack.push(30);
console.log(stack.peek())
console.log(stack.print())
console.log(stack.size())
stack.pop();
console.log(stack.peek())
stack.pop();
stack.pop();
console.log(stack.isEmpty());
console.log(stack.peek())
console.log(stack.print())
console.log(stack.size())