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

function* generator() {
    //This is a generator function whose execution context can be paused and carried on latter. That is a very powerful feature in the jS language.
    //Place it for video intro
}

console.log(reduce([1, 2, 3], (prev, curr) => prev + curr, 0));
console.log(map([1, 2, 3], (el) => 2 * el));