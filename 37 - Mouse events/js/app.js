"use strict"

// Mouse events

const button = document.querySelector(".button");

button.addEventListener("click", function(){
    console.log("The button has been pressed");
})

button.addEventListener("mouseover", function(){
    console.log("The mouse is over the button");
})

button.addEventListener("mouseout", function(){
    console.log("The mouse is out of the button");
})