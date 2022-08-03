(async() => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hello")
        }, 1000);
    })

    await promise;

    console.log("Well I had to run");
})();