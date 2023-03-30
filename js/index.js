import { getRecipes } from "./api.js"
import { displayRecipe } from "./displayRecipe.js"
import {  filterElements } from "./dropdownFilter.js"
import { syncInput, inputFilterRecipes } from "./inputFilter.js"

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
    recipes.forEach(recipe => {
        const ingredients = recipe.ingredients;
        ingredients.forEach(ingredientsRecipe => {
            ingredientsList.push(ingredientsRecipe.ingredient.toUpperCase())
        })
        appareilsList.push(recipe.appliance.toUpperCase())
        recipe.ustensils.forEach( ustensile => ustensilesList.push(ustensile.toUpperCase()))
    })
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
    displayRecipe(recipes)

    const inputs = document.querySelectorAll('#filtres_precis .filterDropdown')
    inputs.forEach(input => {
        input.addEventListener('keyup', (event) =>{
            filterElements(event.target.value.toUpperCase(), input.getAttribute('id'))
        } )
    })
    inputFilterRecipes()
    syncInput()
    
}

init()