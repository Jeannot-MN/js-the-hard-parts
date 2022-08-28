function removeKthNodeFromEnd(head, k) {
    let currentNode = head;
    let kthNodeFromCurrent;
    while (currentNode.next) {
        kthNodeFromCurrent = currentNode;
        for (let i = 0; i < k; i++) kthNodeFromCurrent = kthNodeFromCurrent.next;

        if (!kthNodeFromCurrent) {
            head.value = currentNode.next.value;
            head.next = currentNode.next.next;
            return;
        }
        if (!kthNodeFromCurrent.next) {
            currentNode.next = currentNode.next.next;
            return;
        }
        currentNode = currentNode.next;
    }
}