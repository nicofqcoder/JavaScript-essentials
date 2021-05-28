"use strict"

// Switch

// Evaluation with numbers
var age = 101;
var result = "";

switch (age) {
    case 10:
        result = "The age is 10 years old";
        break;
    case 20:
        result = "The age is 20 years old";
    break;
    case 30:
        result = "The age is 30 years old";
    break;
    default:
        result = "No case matches";
    break;
}

console.log("The result of evaluation with numbers is: "+ result);


// Evaluation with string
var product = "Radio";

switch (product) {
    case "TV":
        product = "TV was chosen";
    break;
    case "Radio":
        product = "Radio was chosen";
    break;
    case "PC":
        product = "PC was chosen";
    break;
    default:
        product = "No case matches";
    break;
}

console.log("The result of evaluation with string is: "+ product);