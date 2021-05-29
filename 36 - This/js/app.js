"use strict"

// This

const button = document.querySelector(".button");

/*
button.addEventListener("click", function(){
    console.log(this.innerHTML);
});
*/

button.addEventListener("click", () => {
    console.log(this);
    this.location = "http://www.google.com";
})