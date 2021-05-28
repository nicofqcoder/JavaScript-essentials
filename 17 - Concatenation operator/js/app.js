"use strict"

// Concatenation operator

var dateA = 10;
var dateB = 20;

var name = "Sergio";
var surname = "Hernandez";

// Number concatenation
var concatNumber = dateA + dateB;
console.log("The numbers "+ dateA + " and "+ dateB + " concatenated form the sum:",concatNumber);

// String concatenation
var concatText = name + " " + surname;
console.log("The texts "+ name + " and "+ surname + " concatenated form:",concatText);

// Concatenation of number as text
var concatNumberTxt = "2" + "8";
console.log("The numbers 2 and 8 used as text form:",concatNumberTxt);

// Concatenation of number and text
var concatTxtNumber = dateA + "8";
console.log("The number " + dateA + " used as number and 8 used as text form:",concatTxtNumber);