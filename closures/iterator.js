function iteration(array) {
    let index = 0;
    return {
        next: function() {
            if (index >= array.length - 1) return array[index];
            return array[index++];
        },

        previous: function() {
            if (index === 0) return array[index];
            return array[index--];
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
console.log(iterator.previous());
console.log(iterator.previous());
console.log(iterator.previous());
console.log(iterator.previous());
console.log(iterator.previous());
console.log(iterator.previous());
console.log(iterator.previous());