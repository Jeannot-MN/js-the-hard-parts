// function increment(input) {
//     return ++input;
// }

// function print() {
//     console.log("Hello world");
// }
// /* var a = 3;
// a = increment(a);
// a = increment(a);

// console.log(a); */

// function runThisOnce(fn) {
//     let count = 0;

//     return function(input) {
//         if (count < 1) {
//             count++;
//             return fn(input);
//         } else throw Error("This can only be run once!")
//     }
// }

// let incrementOnce = runThisOnce(increment);
// let printOnce = runThisOnce(print);

// console.log(incrementOnce(3));
// // console.log(incrementOnce(3));

// printOnce();
// printOnce();

function addition(a, b) {

    return a + b;
}

function AdditionWithHelloWorld(fnct) {
    return function(...args) {

        console.log("Hello World!");
        console.log(...args);

        return fnct(...args);
    }
}

let AdditionHelloWord = AdditionWithHelloWorld(addition);
console.log(AdditionHelloWord(5, 6));