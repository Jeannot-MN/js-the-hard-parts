Array.prototype.deepCompare = function(array2) {
    return this.length === array2.length && this.every((el, i) => el === array2[i]);
}

function deepCompare(array)