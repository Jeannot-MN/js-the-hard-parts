function isValidSubsquence(array, sequence) {
    let sequencePtr = 0;
    for (let arrayPtr = 0; arrayPtr < array.length; arrayPtr++) {
        if (sequencePtr === sequence.length) return true;
        if (sequence[sequencePtr] === array[arrayPtr]) sequencePtr++;
    }

    return false;
}