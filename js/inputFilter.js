import { recipes ,resultRecipes } from "./index.js";
import { displayRecipe } from "./displayRecipe.js";

const mainSearch = document.getElementById('searchbar')
const secondSearchContainer = document.getElementById('filtres_precis')
const secondSearch = secondSearchContainer.querySelectorAll('input')
export const selectedTags=[]
// export function syncInput(){
//     mainSearch.addEventListener('keyup', function(){
//         secondSearch.forEach(secondSearchInput => {
//             secondSearchInput.value = mainSearch.value
//         });
//     })
// }

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
    console.log(resultRecipes.recipes.length, '--', selectedTags)
    let recipeResult = [] 
    switch (type ){
        case "ingredients" : 
           resultRecipes.recipes.forEach(recipe => {
                recipe.ingredients.forEach(ingredient => {
                    if (ingredient.ingredient.toLowerCase() === tag.toLowerCase()){
                        recipeResult.push(recipe)
                    }
                })
            })
        break;
        case 'appareils' : 
           resultRecipes.recipes.forEach(recipe => {
                if (recipe.appliance.toLowerCase() === tag.toLowerCase()){
                    recipeResult.push(recipe)
                }
            })
            break;
            case "ustensiles":
               resultRecipes.recipes.forEach(recipe => {
                    recipe.ustensils.forEach(ustensil => {
                        if (ustensil.toLowerCase() === tag.toLowerCase()){
                            recipeResult.push(recipe)
                        }
                    })
                })
            break; 
        }
       resultRecipes.recipes = [...recipeResult]
        displayRecipe(resultRecipes.recipes)
        selectedTags.push({type, tag})
        return recipeResult
    }


