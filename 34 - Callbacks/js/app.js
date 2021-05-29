"use strict"

// Callbacks

function calculate(dateA, dateB, sumCB, subtCB){
    var sum = dateA + dateB;
    var subt = dateA - dateB;

    sumCB(sum);
    subtCB(subt);
}

calculate(2, 3, function(result){
    console.log("Sum", result);
}, function(result){
    console.log("Substraction", result);
});