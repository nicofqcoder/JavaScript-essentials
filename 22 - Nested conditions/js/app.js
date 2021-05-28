"use strict"

// Nested conditions

var dateA = 110; 
var dateB = 20;
var dateC = 5;
var result = "No data";

if( dateA > dateB ){
    result = "The first condition was met";
    if( dateC < dateB ){
        result = "Nested condition true";
    }else{
        result = "Nested condition not met";
    }

}else{
    result = "The condition was not met";
}


console.log("The result of the nested evaluation is:", result);