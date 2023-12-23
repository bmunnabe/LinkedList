class MyNode {
    constructor(val){
        this.value = val;
        this.next = null;
    }
}

const A = new MyNode('A');
const B = new MyNode('B');
const C = new MyNode('C');
const D = new MyNode('D');

A.next = B;
B.next = C;
C.next = D;

function printTraversal(head) {
    while(head!==null) {
        console.log(head.value);
        head = head.next;
    }
}
printList(A);

// Recursive way
function printRecursiveWay(head){
    if(head===null) return;
    console.log(head.value);
    printRecursiveWay(head.next);
}
printRecursiveWay(A);
