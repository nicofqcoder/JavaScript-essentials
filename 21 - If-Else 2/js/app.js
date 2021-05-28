"use strict"

// If-Else if condition

var dateA = 20; 
var dateB = 20;
var result = "No data";

if( dateA > dateB ){
    result = "The first condition was met";
}else if ( dateA == dateB){
    result = "The second condition is true";
}else{
    result = "The condition was not met";
}


console.log("The result of the evaluation is:", result);