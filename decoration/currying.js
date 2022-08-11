function curry(func, m) {
    return function(n) {
        return func(m, n);
    }
}

function multiply(m, n) {
    return m * n;
}

const multiplyBy2 = curry(multiply, 2);

console.log(multiplyBy2(4));
console.log(multiplyBy2(4.3));
console.log(multiplyBy2(5));