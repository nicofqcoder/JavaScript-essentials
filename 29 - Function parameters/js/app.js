"use strict"

// Functions parameters

function greet(name, age){
    console.log("Hola: ", name);
    console.log("Age: ", age);
    var result = name + " is " + age + " years old";
    return result;
}

var message = greet("Eduardo", 34)
console.log(message);