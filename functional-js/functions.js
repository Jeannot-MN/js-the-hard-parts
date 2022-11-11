console.log(typeof fnExpression);
console.log(typeof arrowFn);
console.log(typeof fnDeclaration);

// fnExpression();
// fnDeclaration()

var fnExpression = function() {
    console.log("Hello! We are happy today...");
}

var arrowFn = () => console.log("This is an arrow function");

function fnDeclaration() {
    console.log("This is a function declaration");
}

console.log(typeof fnExpression);
console.log(typeof arrowFn);
console.log(typeof fnDeclaration);