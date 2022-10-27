Array.prototype.deepCompare = function(array2) {
    return this.length === array2.length && this.every((el, i) => el === array2[i]);
}


const a = [1, 2, 3];
let b = [1, 2, 3];
console.log(a.deepCompare(b));

b = [2, 3];
console.log(a.deepCompare(b));