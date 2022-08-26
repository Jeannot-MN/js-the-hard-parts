function isValidSubsquence(array, sequence) {
    let sequencePtr = 0;
    for (let arrayPtr = 0; arrayPtr < array.length; arrayPtr++) {
        if (sequence[sequencePtr] === array[arrayPtr]) sequencePtr++;
    }

    return sequencePtr === sequence.length;
}