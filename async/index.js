setTimeout(() => {
    console.log("I will be the last!");
}, 0);

const promise = new Promise((resolve, reject) => {
    console.log("Some bloacking code");
    for (let i = 0; i < 1000000; i++) {

    }

    resolve("I am second!")
})

promise.then(data => console.log(data));

console.log("I am first!")