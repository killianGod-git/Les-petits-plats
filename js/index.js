import { createDropdownOptions } from "./dropdownFilter.js"
import { getRecipes } from "./api.js"
import { displayRecipe } from "./displayRecipe.js"

export let recipes = []
async function init(){
    recipes = await getRecipes()
    createDropdownOptions('ingredients')
    createDropdownOptions('appareils')
    createDropdownOptions('ustensiles')
    displayRecipe(recipes)
}
init()