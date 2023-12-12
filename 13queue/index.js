// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor () {
        this.elements = []
    }

    add (element) {
        this.elements.push(element)

    }
    remove () {

        const removedELement = this.elements.shift()

        return removedELement

    }
}


const q = new Queue();
q.add(1);
q.add(2);
q.add(3);

const t = q.remove()

console.log(t)
module.exports = Queue;
