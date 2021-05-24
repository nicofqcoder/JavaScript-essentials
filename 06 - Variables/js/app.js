"use strict"

// var   --> global variable
// let   --> local variable
// const --> constant variable

var name = "Sergio";

console.log(name);

function hello(){
    let name = "Rodrigo";
    console.log(name);

    let age = 34;
    console.log(age);
}

    // console.log(age);

hello();

const pi = 3.1416;

pi = 15;