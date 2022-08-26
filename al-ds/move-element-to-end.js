function moveElementToEnd(array, toMove) {
    let [start, end] = [0, array.length - 1];

    while (start < end) {
        if (array[start] !== toMove) {
            start++;
        } else if (array[end] === toMove) {
            end--;
        } else {
            [array[start], array[end]] = [array[end], array[start]];
        }
    }

    return array;
}