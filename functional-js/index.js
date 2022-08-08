function map(array, operation) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
        result.push(operation(array[i]));
    }

    return result;
}

function mapReduce(array, operation) {
    return array.reduce((prev, curr) => {
        prev.push(operation(curr));
        return prev;
    }, [])
}

function multiplyBy2(num) {
    return num * 2;
}

const array = [1, 2, 3, 4];
console.log(map(array, multiplyBy2));

console.log(mapReduce(array, multiplyBy2));