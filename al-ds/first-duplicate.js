function firstDuplicate(array) {
    const count = {};

    for (const n of array) {
        if (!(n in count)) count[n] = 0;
        count[n]++;

        if (count[n] === 2) return n;
    }

    return -1;
}

function firstDuplicate2(array) {
    const values = new Set();

    for (const n of array) {
        if (values.has(n)) {
            return n;
        } else {
            values.add(n);
        }
    }

    return -1;
}

function firstDuplicateValue(array) {
    let index;
    for (let n of array) {
        index = Math.abs(n) - 1;
        if (array[index] < 0) return Math.abs(n);

        array[index] *= -1;
    }

    return -1;
}