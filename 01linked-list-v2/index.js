// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor (data, next) {
        this.data = data
        this.next = next || null
    }
}

// const n = new Node('There');
// const xx1 = n.data // 'Hi'
// const xx2 = n.next // null
// const n2 = new Node('Hi', n);
// const xx3 = n2.next // returns n
// console.log(xx1, xx2, xx3)

class LinkedList {
    constructor () {
        this.head = null
    }
    getFirst () {
        return this.head || null
    }
    insertFirst (data) {
        const newNode = new Node(data, this.head)
        this.head = newNode
    }

    getLast () {
        if(!this.head) {return null;}

        let node = this.head
        while(node.next) {
            node = node.next
        }
        return node
    }
    size () {
        if(!this.head) {return 0;}
        let counter = 0

        let node = this.head
        while(node) {
            node = node.next
            counter++
        }
        return counter
    }
    clear () {
        this.head = null;
    }
    removeFirst () {
        if(!this.head) {return 0;}

        this.head = this.head.next
        return this.head
    }
    removeLast () {
        if(!this.head) {return }

        if(!this.head.next) {
            this.head = null;
            return;
        }
        let node = this.head
        while(node.next.next) {
            node = node.next
        }
        node.next = null
    }
    insertLast (data) {
        if(!this.head) {
            this.head = new Node(data)
            return;
        }

        let node = this.head
        while(node.next) {
            node = node.next
        }
        node.next = new Node(data)
    }
    getAt (indexPosition) {
        let node = this.head
        // let found;

        // for(let index = indexPosition; index <= indexPosition; index--) {
        //     found = node
        //     node = node.next
        // }
        // return found || null

        let counter = 0
        while(node) {
            if(counter == indexPosition) {
                return node
            }
            counter++
            node = node.next
        }
        return null

    }
    removeAt (index) {
        if(!this.head) return;
        if(index === 0) {
            this.head = this.head.next
            return;
        }
        let prev = this.getAt(index - 1)
        !prev || !prev.next ? null : prev.next = prev.next.next
    }
    insertAt (data, index) {
        if(!this.head) {
            this.head = new Node(data)
            return;
        }
        if(index == 0) {
            this.head = new Node(data, this.head)
            return;
        }
        let prev = this.getAt(index - 1) || this.getLast()
        const node = new Node(data, prev.next)
        prev.next = node
    }
    forEach(fn){
        let counter = 0
        let node = this.head
        while (node) {
            node = node.next
            fn(node,counter)
            counter++
        }
    }

}
const l = new LinkedList();
l.insertLast(1);
l.insertLast(2);
l.insertLast(3);
l.insertLast(4);

l.forEach(node => {
    node.data += 10;
});
module.exports = {Node, LinkedList};
