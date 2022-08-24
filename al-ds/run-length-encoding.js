function encode(input) {
    let result = "";

    if (!input || input.length === 0) return result;

    let previousChar = input[0];
    let count = 1;
    for (let i = 1; i < input.length; i++) {
        if (previousChar === input[i]) {
            count++;
        } else {
            result += `${count}${previousChar}`;
            previousChar = input[i];
            count = 1;
        }
    }

    result += `${count}${previousChar}`;
    return result;
}

console.log(encode("aaaabbbaaddzzcc"));