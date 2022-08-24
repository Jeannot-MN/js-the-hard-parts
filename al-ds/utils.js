export function Array(size) {
    this.size = size;
    this.pos = 0;
    this.data = [];
}

Array.prototype.insert = function(element) {
    this.data[this.pos++] = element;
}

Array.prototype.clear = function() {
    for (let i = 0; i < this.size; i++) {
        this.data[i] = 0;
    }
    this.pos = 0;
}

Array.prototype.randomize = function() {
    for (let i = 0; i < this.size; i++) {
        this.data[i] = Math.floor(Math.random() * (this.size + 1));
    }
    this.pos = this.size;
}

Array.prototype.swap = function(i, j) {
    [this.data[i], this.data[j]] = [this.data[j], this.data[i]]
}

Array.prototype.setData = function(data) {
    this.data = data;
    this.pos = data.length;
    this.size = data.length;
}

Array.prototype.at = function(index) {
    return this.data[index];
}