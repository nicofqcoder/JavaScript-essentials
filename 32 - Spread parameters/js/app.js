"use strict"

// Rest parameters

function cook(ingredient1, ingredient2, ingredient3, ...others) {
    console.log("Ingredient 1: ", ingredient1);
    console.log("Ingredient 2: ", ingredient2);
    console.log("Ingredient 3: ", ingredient3);
    console.log("Others: ", others)
}

var baseIngredients = ["Chicken", "Tomato"];

cook(...baseIngredients, "Rice", "Potato", "Chile");