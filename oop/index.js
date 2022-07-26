//With this approch the same function will be created multiple time whenever we create a new user.
function User(name, age) {
    const newUser = {
        name: name,
        age: age,
        increment: function() { this.age++; }
    }

    return newUser;
}

const user1 = User("John", 23);

user1.increment();
console.log(user1.age);

//Better approach

const functionStore = {
    increment: function() { this.age++; }
}

function BetterUser(name, age) {
    const newUser = Object.create(functionStore);

    newUser.name = name;
    newUser.age = age;
    return newUser;
}

const betterUser = BetterUser("Jane", 34);
betterUser.increment();

console.log(betterUser.age);