function createFunction() {
    let b = 3;
    return function square(a) {
        console.log(b);
        return a * a;
    }
}

const generatedFunc = createFunction();
console.log(generatedFunc(3));
console.log(generatedFunc(2));
console.log(generatedFunc(4));

// b inside createFunction is remembered although createFunction execution context is removed


function outer() {
    let counter = 0;

    function incrementCounter() {
        counter++;
    }
    incrementCounter();
}

outer();

function outer2() {
    let counter = 0;

    function incrementCounter() { counter++ }

    return incrementCounter;
}

const newFunction = outer2();
newFunction();
newFunction();