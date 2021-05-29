"use strict"

// Arrow function

var greet = name => "Hello " + name;
console.log(greet("Sussana"));

var sum = amount => amount + 10;
console.log(sum(10));

var calculate = (dateA, dateB) => dateA + dateB;
console.log(calculate(10, 15));

var generate = (dateA, dateB) => {
    var dateC = 5;
    return dateA + dateB + dateC;
}
console.log(generate(10, 15));

var validate = () => {
    return "Correct validation";
}
console.log(validate());