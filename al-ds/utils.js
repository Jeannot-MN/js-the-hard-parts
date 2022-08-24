export function swap(i, j, array) {
    [array[i], array[j]] = [array[j], array[i]];
}

export function Array(size) {
    this.size = size;
    this.pos = 0;
    this.data = [];
}

Array.prototype.insert = function(element) {
    this.data[this.pos++] = element;
}