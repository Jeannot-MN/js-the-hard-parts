function withMemoization(func) {
    const cache = {};

    return function memoized(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            console.log("This is memoized!!!");
            return cache[key];
        }

        console.log("Oops I have never seen this input");

        const result = func(...args);
        cache[key] = result;

        return result;
    };
}

const square = withMemoization((input) => input * input);
console.log(square(10));
console.log(square(2));
console.log(square(10));
console.log(square(4));
console.log(square(3));
console.log(square(2));