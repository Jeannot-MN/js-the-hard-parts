class Stack {
    constructor() {
        this.data = [];
    }

    push(data) {
        this.data.push(data);
    }

    pop() {
        return this.data.pop();
    }
}


const string = "lydia";

let stack = new Stack();

for (let i = 0; i < string.length; i++) {
    stack.push(string[i]);
}

let reversedString = '';
while (stack.data.length > 0) {
    reversedString += stack.pop();
}

console.log(reversedString);