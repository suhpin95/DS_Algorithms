import DoublyLinkedList  from "../src/doublyLinkedList";

test( 'Check creation of DoublyLinkedList', ()=>{
    const doublylinkedList = new DoublyLinkedList();
    expect( doublylinkedList).toString().toBe('');
});