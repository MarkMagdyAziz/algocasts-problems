// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'
const L = require('./linkedlist');
const Node = L.Node;
const LinkedList = L.LinkedList;

function fromLast (list, n) {
    let slow = list.getFirst()
    let fast = list.getFirst()
    console.log('list', list)

    console.log('slow', slow)


    while(n > 0) {
        fast = fast.next;
        n--;
    }

    console.log('fast', fast)

    while(fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    console.log('slow', slow)

    console.log('fast', fast)

    return slow;
}

const list = new LinkedList();
list.insertLast('a');
list.insertLast('b');
list.insertLast('c');
list.insertLast('d');
list.insertLast('e');

const x = fromLast(list, 3) // 'b'

module.exports = fromLast;
