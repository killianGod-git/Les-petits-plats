import { recipes ,resultRecipes } from "./index.js";
import { displayRecipe } from "./displayRecipe.js";

const mainSearch = document.getElementById('searchbar')
const secondSearchContainer = document.getElementById('filtres_precis')
const secondSearch = secondSearchContainer.querySelectorAll('input')
export const selectedTags=[]


function searchRecipes(searchTerm){
    const partialResult=selectedTags.length<=0? recipes:[]
    selectedTags.forEach(({type, tag})=>{
        const list=tagsFilterRecipes(tag, type, false)
        list.forEach((item) => {
            if ( !partialResult.find((re) => re.id === item.id)){
                console.log('list' , list)
                partialResult.push(list)
            }
        })
    })
    console.log(partialResult)
    return partialResult.filter(recipe => {
        return recipe.name.toLowerCase().includes(searchTerm) ||
            recipe.description.toLowerCase().includes( searchTerm) ||
            recipe.ingredients.some((ingredientObj) => {
                const ingredient = ingredientObj.ingredient.toLowerCase();
                return ingredient.includes(searchTerm);
        }); 
})}
function filterRecipes(){
    const searchTerm = mainSearch.value;
    const searchedRecipes = searchRecipes(searchTerm.toLowerCase());
    if (searchedRecipes.length !== 0){
        console.log(searchedRecipes)
        displayRecipe(searchedRecipes)
    } else {
        console.log("pas de recettes ")
    }
        
    
}
export function inputFilterRecipes(){
    mainSearch.addEventListener('input', () => {
        if(mainSearch.value.length >= 3){
            filterRecipes()
        }
    })
}

export function tagsFilterRecipes(tag, type, addTag=true){
    console.log("addTag", addTag)
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
        if (addTag){
            selectedTags.push({type, tag})
        }
        console.log("recipeResult", recipeResult)
        return recipeResult
    }


