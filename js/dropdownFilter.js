
import { recipes } from "./index.js";

// 
// 
// fonctions création dropdown a refactoriser 
// trop de répétitions dans le code 
// 
// 
// ingredients fonctions
function ingredientsRecuperation(){
    const ingredientsList = []
    recipes.forEach(recipe => {
        const ingredients = recipe.ingredients;
        ingredients.forEach(ingredientsRecipe => {
            ingredientsList.push(ingredientsRecipe.ingredient)
        })
    })
    return ingredientsList
}
function doublonIngredients(){
    const lowerCaseIngredients = ingredientsRecuperation().map(allIngredients => allIngredients.toLowerCase());
    var ingredientUnique = [...new Set(lowerCaseIngredients)]
    return ingredientUnique
 }

// appareils fonctions
function appareilsRecuperation(){
    const appareilsList = []
    recipes.forEach(recipe => {
        appareilsList.push(recipe.appliance)
    })
    return appareilsList
}
 function doublonAppareils(){
    const lowerCaseAppareils = appareilsRecuperation().map(allAppareils => allAppareils.toLowerCase());
    var appareilUnique = [...new Set(lowerCaseAppareils)]
    return appareilUnique
 }

// ustensiles fonctions
function ustensilesRecuperation(){
    const ustensilesList = []
    recipes.forEach(recipe => {
        const ustensiles = recipe.ustensils;
        ustensiles.forEach(ustensilesRecipe => {
            ustensilesList.push(ustensilesRecipe)
        })
    })
    return ustensilesList
}
 function doublonUstensiles(){
    const lowerCaseUstensiles = ustensilesRecuperation().map(allUstensiles => allUstensiles.toLowerCase());
    var ustensilesUnique = [...new Set(lowerCaseUstensiles)]
    return ustensilesUnique
 }




// création dropdown
export function createDropdownOptions(type){
    if (type === 'ingredients'){
        const options = doublonIngredients()
        const selectField = document.getElementById("dropdown_ingredients_content")
        options.forEach(dataOption => {
            const optionDom = `<li>${dataOption}</li>`
            selectField.innerHTML += optionDom
        })
    } else if (type === 'appareils'){
        const options = doublonAppareils()
        const selectField = document.getElementById("dropdown_appareils_content")
        options.forEach(dataOption => {
            const optionDom = `<li>${dataOption}</li>`
            selectField.innerHTML += optionDom
        })
    } else if( type === 'ustensiles'){
        const options = doublonUstensiles()
        const selectField = document.getElementById("dropdown_ustensiles_content")
        options.forEach(dataOption => {
            const optionDom = `<li>${dataOption}</li>`
            selectField.innerHTML += optionDom
        })
    } else{
        console.log('erreur')
    }
    
 }



    
    const dropdownBtnIngredients = document.getElementById("my-ingredients");
    const dropdownContentIngredients = document.getElementById('dropdown_ingredients_container');
    dropdownBtnIngredients.addEventListener('click', function(){
        if( dropdownContentIngredients.style.display === "none"){
            dropdownContentIngredients.style.display = "block"
        } else{
            dropdownContentIngredients.style.display = "none"
        }
    })

    const dropdownBtnAppareils = document.getElementById("my-appareils");
    const dropdownContentAppareils = document.getElementById('dropdown_appareils_container');
    dropdownBtnAppareils.addEventListener('click', function(){
        if(dropdownContentAppareils.style.display === "none"){
            dropdownContentAppareils.style.display = "block"
        }
        else {
            dropdownContentAppareils.style.display = "none"
        }
    })

    const dropdownBtnUstensiles = document.getElementById("my-ustensiles");
    const dropdownContentUstensiles = document.getElementById('dropdown_ultensiles_container');
    dropdownBtnUstensiles.addEventListener('click', function(){
        if ( dropdownContentUstensiles.style.display === "none"){
            dropdownContentUstensiles.style.display = "block"
        } else {
            dropdownContentUstensiles.style.display = "none"
        }

    })