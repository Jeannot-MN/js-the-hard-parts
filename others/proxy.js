const person = {
    name: "John",
    surname: "Smith"
}

const proxy = new Proxy(person, (key, target) => {
    console.log(key);
    if (key === 'name') return target.toUppercase();

    return target;
});

console.log(proxy['name']);;