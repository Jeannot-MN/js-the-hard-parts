function doWhenCompleted(value) {
    returnNextElement.next(value);
}

function* createFlow() {
    const data = yield new Promise((resolve, rej) => {
        setTimeout(() => {
            resolve("Hello");
        }, 1000)
    });
    console.log(data);
}

function helloWorld() {
    return "Hello world! This comes from fleet."
}

const returnNextElement = createFlow();
const futureData = returnNextElement.next();
console.log(futureData);

futureData.value.then(doWhenCompleted);