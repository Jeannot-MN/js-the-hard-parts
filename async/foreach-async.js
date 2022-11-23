function getDelayPromise(delay) {
    return new Promise((res) => {
        setTimeout(() => res(`Done timing => ${delay}`), delay);
    });
}

const promises = [
    getDelayPromise(2000),
    getDelayPromise(1500),
    getDelayPromise(1000),
    getDelayPromise(500),
    getDelayPromise(250),
]

promises.forEach(async(p) => {
    console.log(await p);
});

for (const p of promises) {
    console.log(await p);
}

console.log('We are done!');