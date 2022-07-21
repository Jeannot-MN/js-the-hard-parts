function iteration(array) {
    let index = 0;
    return {
        next: function() {
            if (index >= array.length) throw Error("No such element")
            array[index++];
        }
    }
}

const array = [1, 2, 3, 4, 5]
const iterator = iteration(array);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());