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


function decode(encoding) {
    let result = "";

    if (!encoding || encoding.length === 0) return result;

    for (let i = 0; i < encoding.length; i += 2) {
        result += encoding[i + 1].repeat(+encoding[i]);
    }

    return result;
}
console.log(encode("aaaabbbaaddzzcc"));
console.log(decode("4a3b2a2d2z2c"));