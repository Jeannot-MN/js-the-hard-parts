function firstDuplicate(array) {
    const count = {};

    for (const n of array) {
        if (!(n in count)) count[n] = 0;
        count[n]++;

        if (count[n] === 2) return n;
    }

    return -1;
}