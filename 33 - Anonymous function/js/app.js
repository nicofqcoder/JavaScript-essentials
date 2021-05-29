"use strict"

// Anonymous function

// (
//     function(){
//         var message = "Hello again!";
//         console.log(message);
//     }
// )()

var greet = function(name){
    var message = "Hello " + name;
    return message;
}