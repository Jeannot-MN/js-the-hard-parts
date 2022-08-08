function multiplyBy2(num) {
    return num * 2;
}

function add3(num) {
    return num + 3;
}

function divideBy5(num) {
    return num / 5;
}

//FIRST APPROACH
const num = 11;
const multBy2 = multiplyBy2(11);
const plus3 = add3(multBy2);
const finalRes = divideBy5(plus3);
console.log(finalRes);

//SECOND APPROACH
const fr = divideBy5(add3(multiplyBy2(11)));
console.log(fr);

//OR BETTER, USING REDUCE
const res = [multiplyBy2, add3, divideBy5].reduce((prev, curr) => {
    return curr(prev);
}, 11);
console.log(res);