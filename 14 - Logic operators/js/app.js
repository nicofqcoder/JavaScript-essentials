"use strict"

//  Logic operators

var dateA = 10;
var dateB = 20;

// AND - &&
var and = (dateA > 10 && dateB > 10);
console.log("The result of the evaluation AND is: " + and);

// OR
var or = (dateA > 10 || dateB > 10);
console.log("The result of the evaluation OR is: " + or);

// NOT
var not = !(dateA > 10);
console.log("The result of the evaluation NOT is: " + not);
