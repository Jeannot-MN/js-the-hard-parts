function sortedSquaredArray(array) {
    let largest = array.length - 1;
    let smallest = 0;

    const output = [];
    for (let i = array.length - 1; i >= 0; i--) {
        if (Math.abs(array[smallest]) > Math.abs(array[largest])) {
            output[i] = array[smallest] * array[smallest];
            smallest++;
            continue;
        }
        output[i] = array[largest] * array[largest];
        largest--;
    }
    return output;
}