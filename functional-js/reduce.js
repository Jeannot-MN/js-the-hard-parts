function reduce(array, reducer, accumulator) {
    for (let i = 0; i < array.length; i++) {
        accumulator = reducer(accumulator, array[i]);
    }
    return accumulator;
}


function map(array, operation) {
    return reduce(array, (prev, curr) => {
        prev.push(operation(curr));
        return prev;
    }, [])
}

console.log(reduce([1, 2, 3], (prev, curr) => prev + curr, 0));
console.log(map([1, 2, 3], (el) => 2 * el));