import { getRecipes } from "./api.js"
import { displayRecipe } from "./displayRecipe.js"
import {  filterElements } from "./dropdownFilter.js"
import {  inputFilterRecipes } from "./inputFilter.js"
export let resultRecipes = {recipes: []}
export let recipes = []
export const detailsRecettes = {
    ingredients : [],
    appareils : [],
    ustensiles : []
}

export function decomposeRecettes(recipes){
    const ingredientsList = []
    const appareilsList = []
    const ustensilesList = []
    
    for (var index = 0; index < recipes.length; index++) {
        const recipe = recipes[index]
        var ingredientIndex = 0
        while(ingredientIndex < recipe.ingredients.length){
            const ingredientsRecipe = recipe.ingredients[ingredientIndex];
            ingredientsList.push(ingredientsRecipe.ingredient.toLowerCase());
            ingredientIndex++;
        }
        appareilsList.push(recipe.appliance.toLowerCase())
        for (var ustensilIndex = 0; ustensilIndex < recipe.ustensils.length; ustensilIndex++ ){
            const ustensilRecipe = recipe.ustensils[ustensilIndex]
            ustensilesList.push(ustensilRecipe.toLowerCase())
            console.log(ustensilesList)
        }

    }
    detailsRecettes.ingredients = [...new Set(ingredientsList)]
    detailsRecettes.appareils = [...new Set(appareilsList)]
    detailsRecettes.ustensiles = [...new Set(ustensilesList)]
    return {
        ingredients : [...new Set(ingredientsList)],
        appareils : [...new Set(appareilsList)],
        ustensiles : [...new Set(ustensilesList)]
    }
}

async function init(){
    recipes = await getRecipes()
    resultRecipes.recipes = [...recipes]
    displayRecipe(recipes)


    const inputs = document.querySelectorAll('#filtres_precis .filterDropdown')
    inputs.forEach(input => {
        input.addEventListener('keyup', (event) =>{
            filterElements(event.target.value.toLowerCase(), input.getAttribute('id'))
        } )
    })
    inputFilterRecipes()
    
    
}

init()