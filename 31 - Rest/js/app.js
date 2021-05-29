"use strict"

// Rest parameters

function cook(ingredient1, ingredient2, ...moreIngredient) {
    console.log("Ingredient 1: ", ingredient1);
    console.log("Ingredient 2: ", ingredient2);
    console.log("More ingredients: ", moreIngredient);
}

cook("Chicken", "Tomato", "Rice", "Potato", "Fish");