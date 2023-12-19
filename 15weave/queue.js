// --- Directions
// Implement a 'peek' method in this Queue class.
// Peek should return the last element (the next
// one to be returned) from the queue *without*
// removing it.

class Queue {
  constructor () {
    this.data = [];
  }

  add (record) {
    this.data.unshift(record);
  }

  remove () {
    return this.data.pop();
  }
  peek () {
    return this.data[this.data.length - 1] || null
  }
}

const q = new Queue();

q.add(1)
q.add(2)
console.log(q.peek())
console.log(q.peek())


const r1 = q.remove()
const r2 = q.remove()

console.log(r1, r2)
module.exports = Queue;
