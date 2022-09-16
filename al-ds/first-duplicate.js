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