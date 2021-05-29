"use strict"

// Keyboard events

// keydown
// keypress
// keyup

window.addEventListener("keydown", function(event){
    console.log("Pressing key");
    console.log(String.fromCharCode(event.keyCode));
})

window.addEventListener("keypress", function(event){
    console.log("Key pressed");
})

window.addEventListener("keyup", function(event){
    console.log("Key released");
})