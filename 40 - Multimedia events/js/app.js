"use strict"

// Multimedia events

const video = document.querySelector('.bostonVideo');

video.addEventListener("play", function() {
    console.log("The video has started");
});

video.addEventListener("seeking", function() {
    console.log("The video is being searched", this.currentTime);
});

video.addEventListener("ended", function(){
    console.log("The video is over");
});
