function User(name, score) {
    this.name = name;
    this.score = score;
}

//Static value just available on the function used as an object
User.static = 3;

////Static value just available all instance but only updated on the instance😐😑
User.prototype.static = 4;

User.prototype.increment = function() {
    this.score++;
}

User.prototype.decrement = function() {
    this.score--;
}

const user = new User("Jane", 23);
user.increment();

user.static = 8;
console.log(user.static);

const user2 = new User("John", 24);

//Wait what!!! Why are function the same but not primitives(😅😅)
console.log(user.static === user2.static);
console.log(user2.increment === user.increment);

console.log(User.prototype);


//Does this work?
function Person(name, age) {
    this.name = name;
    this.age = age;

    return this;
}

Person.prototype.greet = function() {
    console.log(this.name + " " + "Hi");
}
const p = Person("John", 35);
console.log(p.age);
p.greet();