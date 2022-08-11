function oncify(func) {
    let count = 0;

    return function(...args) {
        if (count === 0) {
            count++;
            return func(...args);
        }
        throw Error("I can only be run once.");
    }
}

function square(num) {
    return num * num;
}

let decoratedSquare = oncify(square);

decoratedSquare(10);
decoratedSquare(12);