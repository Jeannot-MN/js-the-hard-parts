const person = {
    name: "John",
    surname: "Smith"
}

const proxy = new Proxy(person, {
    get(target, key) {
        if (target === 'name') return target.toUpperCase();

        return target;
    }
});

console.log(proxy.name);