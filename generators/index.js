function* generator() {
    console.log("Generator is called again!");
    yield 1;
    yield 2;
    yield 3;
}

function* createFlow() {
    const num = 10
    const newNum = yield num

    const ss = yield newNum + 2
    yield ss();
}

/* const gen = generator();

console.log(gen.next());
console.log(gen.next()); */

const gen = createFlow();

console.log(gen.next(2));
console.log(gen.next(2));
console.log(gen.next(function() { return 4 }));