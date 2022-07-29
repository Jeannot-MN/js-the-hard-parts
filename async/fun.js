(
    async() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("I am resolved!")
            }, 1000);
        });

        const data = await promise;

        console.log(data);

        console.log("Am I first?")
    }
)();