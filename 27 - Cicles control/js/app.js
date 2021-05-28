"use strict"

// Cicles control

var accountant = 0;
var account = 0;

for(accountant = 0; accountant<=20; accountant++){
    if(account == 5){
        break;
    }
    if(accountant % 2 == 0){
        continue;
    }
    account++;
    debugger;
}

console.log("The are " + account + " odd numbers");