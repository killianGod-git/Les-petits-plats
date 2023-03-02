import { getRecipes } from "./api.js"
import { displayRecipe } from "./displayRecipe.js"
import { dropdown } from "./dropdownFilter.js"
import { filterIngredients } from "./dropdownFilter.js"

export let recipes = []
export const detailsRecettes = {
    ingredients : [],
    appareils : [],
    ustensiles : []
}

function decomposeRecettes(recipes){
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
    decomposeRecettes(recipes)
    displayRecipe(recipes)
    dropdown(detailsRecettes)
    const input = document.getElementById('search-ingredients')
    input.addEventListener('keyup', (event) => {
        filterIngredients(event.target.value.toUpperCase())
    })
}

init()