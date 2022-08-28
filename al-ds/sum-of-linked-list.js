function sumOfLinkedLists(linkedListOne, linkedListTwo) {
    let carry = 0;
    let currentDigitsSum = 0;

    let sumLinkedList;
    let previousSumLinkedListNode;
    while (linkedListOne || linkedListTwo || carry) {
        currentDigitsSum = (linkedListOne ? linkedListOne.value : 0) + (linkedListTwo ? linkedListTwo.value : 0) + carry;
        carry = currentDigitsSum > 9 ? 1 : 0;

        if (!sumLinkedList) {
            previousSumLinkedListNode = new LinkedList(currentDigitsSum % 10);
            sumLinkedList = previousSumLinkedListNode;
        } else {
            previousSumLinkedListNode.next = new LinkedList(currentDigitsSum % 10);
            previousSumLinkedListNode = previousSumLinkedListNode.next;
        }
        linkedListOne = linkedListOne ? linkedListOne.next : linkedListOne;
        linkedListTwo = linkedListTwo ? linkedListTwo.next : linkedListTwo;
    }
    return sumLinkedList;
}