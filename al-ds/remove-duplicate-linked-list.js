class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function removeDuplicatesFromLinkedList(linkedList) {
    let current = linkedList;
    while (current) {
        let lastConsecutiveNode = current;
        while (lastConsecutiveNode.value === lastConsecutiveNode.next.value) {
            lastConsecutiveNode = lastConsecutiveNode.next;
        }
        current.next = lastConsecutiveNode.next;
        current = lastConsecutiveNode.next;
    }

    return linkedList;
}

function removeDuplicatesFromLinkedList2(linkedList) {
    let current = linkedList;

    while (current.next) {
        if (current.value = current.next.value) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return linkedList;
}