function reverseLinkedList(head) {
    let node = head,
        next = head.next,
        next2;
    node.next = null;

    while (next) {
        next2 = next.next;
        next.next = node;
        node = next;
        next = next2;
    }

    return node;
}