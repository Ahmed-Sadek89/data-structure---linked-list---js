class Node {
    // each node has (value, next ->)
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    // list containng (head pointed to -> all nodes till reaching to -> null)
    constructor() {
        this.head = null; // the first of the list;
        this.tail = null; // the last of the list
        this.size = 0;
    }

    getSize() {
        return `SIZE OF LIST = ${this.size}`;
    }

    isEmpty() {
        return this.size === 0;
    }

    prepend(value) {
        // insert node in the first of the list
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
            node.next = null
        } else{
            node.next = this.head;
            this.head = node;
        }
        this.size++
        // console.log({...this.head})
    }

    append(value) {
        // insert node in the last of the list
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            node.next = null
        } else{
            let curr = this.head; // simple guide to point to the next node
            while(curr.next !== null) {
                curr = curr.next
            };
            curr.next = node;
            this.tail = curr.next;
            node.next = null;
        }
        this.size++
        // console.log({...this.head})
    }

    removeFromFront() {
        // remove the first node in the list
        if ( this.isEmpty() ) {
            console.log('list is empty for removing from the front')
        } else {
            this.head = this.head.next;
            this.size--
        }

    }

    removeFromEnd() {
        // remove the last node in the list 
        if ( this.isEmpty() ) {
            console.log('list is empty for removing from the last')
        } else {
            let prev = null
            let removedNode = this.head;
            while(removedNode.next !== null) {
                prev = removedNode
                removedNode = removedNode.next;
            }
            this.tail = prev
            prev.next = null;
            this.size--
        }
    }

    insert(value, index) {
        const node = new Node(value);
        if ( index < 0 || index > this.size) { // if the index is invalid :(
            console.log('index => ', index ,' is invalid')
        } else { // if the index is a valid index :)
            if ( index === 0 ) { // insert in the first of the list
                this.prepend(value)
            } else {
                let counter = 0;
                let currentNode = this.head;
                while(counter !== (index -1)) {
                    counter++;
                    currentNode = currentNode.next;
                }
                let nextNode = currentNode.next;
                currentNode.next = node;
                node.next = nextNode;
                this.size++
                if ( index === this.size - 1) {
                    this.tail = node
                }
                // console.log({counter, currentNode, nextNode})
            }
        }
    }

    removeByIndex(index) {
        if ( index < 0 || index >= this.size) { 
            // if the index is invalid or the list is empty :(
            console.log('the list is empty--OR--index => ', index ,' is invalid to remove')
        } else { 
            // if the index is valid or the list is not empty :)
            let removedNode
            if (index === 0) {
                removedNode = this.head.value;
                console.log('remove ', removedNode, ' at index ', index)
                this.head = this.head.next;
            } else {
                let prev = this.head;
                let counter = 0;
                while( counter !== (index - 1) ) {
                    counter++;
                    prev = prev.next
                }
                if ( index === this.size - 1) {
                    this.tail = prev
                }
                removedNode = prev.next;
                prev.next = removedNode.next
                console.log('remove ',removedNode.value ,' at index ', index)
            }
            this.size--
        }
    }

    removeByValue(value) {
        if ( this.isEmpty() ) { 
            console.log('the list is empty')
        } else { 
            if ( this.head.value === value ) {
                // check if value in the first of the list
                this.head = this.head.next;
                console.log('element is found to remove :) ', value)
                this.size--
            } else {
                // if value is not in the first of the list
                let prev = this.head;
                while( prev.next !== null && prev.next.value !== value ) {
                    prev = prev.next
                }
                if( prev.next !== null ) {
                    console.log('element is found to remove :) ', prev.next.value)
                    this.tail = prev
                    let removedNode = prev.next;
                    prev.next = removedNode.next;
                    this.size--
                } else {
                    console.log('element is not found to remove :(')
                }
            }
        }
    }

    searchByValue(value) {
        if ( this.isEmpty() ) { 
            console.log('the list is empty')
        } else {
            let counter = 0;
            let prev = this.head;
            while(prev.next !== null && prev.value !== value) {
                counter++;
                prev = prev.next;
            }
            if ( prev.value === value ){
                console.log('element ', value ,' is found in index ', counter)
            } else {
                console.log('element ', value ,' is not found')
            }
        }
    }

    print() {
        let result = []
        if (this.isEmpty()) {
            return 'your list is empty'
        } else {
            function printValue(nextVal) {
                result.push(nextVal.value)
                if(nextVal.next !== null) {
                    printValue(nextVal.next)
                }
            }
            printValue(this.head)
            return result
        }
    }

    reverse() {
        if (this.isEmpty()) {
            console.log('your list is empty to reverse! ...');
        } else {
            let prev = null;
            let curr = this.head;
            
            while (curr !== null) {
                let next = curr.next;
                curr.next = prev;
                prev = curr 
                curr = next
            }
            this.head = prev
            return this.head
        }
    }
}

// const list = new LinkedList();

// list.append(1);
// list.append(2);
// list.append(3);
// list.append(4);
// list.prepend(0)


// console.log(list.getSize(), ' ', list.print())
// list.removeFromFront()
// list.removeFromEnd()
// console.log(list.getSize(), ' ', list.print())
// console.log(list)

module.exports = LinkedList;