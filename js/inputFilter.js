import { recipes } from "./index.js";
import { displayRecipe } from "./displayRecipe.js";
const mainSearch = document.getElementById('searchbar')
const secondSearchContainer = document.getElementById('filtres_precis')
const secondSearch = secondSearchContainer.querySelectorAll('input')
export function syncInput(){
    // mainSearch.addEventListener('keyup', function(){
    //     secondSearch.forEach(secondSearchInput => {
    //         secondSearchInput.value = mainSearch.value
    //     });
    // })
}

function searchRecipes(searchTerm){
    return recipes.filter(recipe => {
        return recipe.name.toLowerCase().includes(searchTerm) || recipe.description.toLowerCase().includes( searchTerm)  
    })
}
function filterRecipes(){
    const searchTerm = mainSearch.value;
    const searchedRecipes = searchRecipes(searchTerm);
    displayRecipe(searchedRecipes)
        
    
}
export function inputFilterRecipes(){
    mainSearch.addEventListener('input', () => {
        filterRecipes()
    })
}

export function tagsFilterRecipes(tag, type){
    const recipeResult = [] 
    switch (type ){
        case "ingredients" : 
            recipes.forEach(recipe => {
                recipe.ingredients.forEach(ingredient => {
                    if (ingredient.ingredient.toLowerCase() === tag.toLowerCase()){
                        recipeResult.push(recipe)
                    }
                })
            })
        break;
        case 'appareils' : 
            recipes.forEach(recipe => {
                if (recipe.appliance.toLowerCase() === tag.toLowerCase()){
                    recipeResult.push(recipe)
                }
            })
            break;
            case "ustensiles":
                recipes.forEach(recipe => {
                    recipe.ustensils.forEach(ustensil => {
                        if (ustensil.toLowerCase() === tag.toLowerCase()){
                            recipeResult.push(recipe)
                        }
                    })
                })
            break; 
        }
        return recipeResult
    }