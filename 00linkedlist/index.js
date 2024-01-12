// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor (data, next) {
        this.data = data
        this.next = next || null
    }
}


const n = new Node('There');
n.data // 'There'
n.next // null

// console.log(n.data,n.next)
const n2 = new Node('Hi', n);
n2.next // returns n
n2.data // 'Hi'
// console.log(n2.data,n2.next)

class LinkedList {
    constructor () {
        this.head = null
    }
    insertFirst (data) {
        // console.log('head 28',this.head)

        // console.log('data 30',data)

        this.head = new Node(data, this.head)
        // console.log('head 34',this.head)
    }
    size () {
        let LLSize = 0;
        let node = this.head
        while(node !== null) {
            node = node.next
            ++LLSize
        }
        return LLSize
    }
    getFirst () {
        return this.head
    }
    getLast () {
        let node = this.head

        if(!node) {
            return null
        }
        while(node) {
            if(!node.next) {
                return node
            }
            node = node.next
        }
    }
    clear () {
        this.head = null
    }
    removeFirst () {
        if(this.head) {
            this.head = this.head.next
        }
        return this.head
    }
    removeLast () {
        if(!this.head) {
            return;
        }
        if(!this.head.next) {
            this.head = null;
            return;
        }
        let prevNode = this.head;
        let currentNode = this.head.next;
        while(currentNode.next) {
            // console.log('84',this.head)
            prevNode = currentNode
            currentNode = currentNode.next
            // console.log('87',this.head)

            // console.log('head ',this.head)
            // console.log('prev ',prevNode)
            // console.log('current ',currentNode)
        }

        prevNode.next = null
    }
    insertLast (data) {
        if(this.head) {
            // console.log('pass by reference 1',this.head)

            this.getLast().next = new Node(data)
            // console.log('pass by reference 2',this.head)

        }
        else {
            this.head = new Node(data)
        }
    }
    getAt (index) {
        let node = this.head;
        for(let counter = 0; counter <= index; counter++) {
            if(!node) {
                return null
            }
            if(counter === index) {
                return node;
            }
            node = node.next
            // counter++
        }
    }
    removeAt (index) {
        if(!this.head) {return;}

        if(index === 0) {
            return this.head = this.head.next
        }

        const previousNode = this.getAt(index - 1)

        if(!previousNode || !previousNode.next) {
            return previousNode
        }
        previousNode.next = previousNode.next.next

    }
    insertAt (data, integer) {
        if(!this.head) {
            this.head = new Node(data)
            return
        }
        if(integer === 0) {

            this.head = new Node(data, this.head)
            return
        }
        const prevNode = this.getAt(integer - 1) || this.getLast()
        const node = new Node(data, prevNode.next)
        prevNode.next = node

    }

}


const LL1 = new LinkedList()

// LL1.insertFirst('Y 1')
// LL1.insertFirst('Y 2')

// LL1.removeAt(3)

LL1.insertLast('a')
LL1.insertLast('b')
LL1.insertLast('c')


LL1.insertAt('hi', 2);

console.log(LL1.getAt(0).data)
console.log(LL1.getAt(1).data)

console.log(LL1.getAt(2).data)
// console.log(LL1.getAt(3).data)

module.exports = {Node, LinkedList};
