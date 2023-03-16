import { recipes } from "./index.js";
import { displayRecipe } from "./displayRecipe.js";
const mainSearch = document.getElementById('searchbar')
const secondSearchContainer = document.getElementById('filtres_precis')
const secondSearch = secondSearchContainer.querySelectorAll('input')
export function syncInput(){
    mainSearch.addEventListener('keyup', function(){
        secondSearch.forEach(secondSearchInput => {
            secondSearchInput.value = mainSearch.value
        });
    })
}

function searchRecipes(searchTerm){
    return recipes.filter(recipe => {
        return recipe.name.toLowerCase() == searchTerm || recipe.description.toLowerCase() == searchTerm  
    })
}
function filterRecipes(){
    console.log("test")
    const searchTerm = mainSearch.value;
    const searchedRecipes = searchRecipes(searchTerm);
    displayRecipe(searchedRecipes)
        
    
}
export function inputFilterRecipes(){
    mainSearch.addEventListener('input', () => {
        filterRecipes()
    })
}
