
import { recipes, detailsRecettes } from "./index.js";

// 
// 
// fonctions création dropdown a refactoriser 
// trop de répétitions dans le code 
// 
// 
// ingredients fonctions

// création dropdown
export function dropdown(data){
    displayIngredientsList(data.ingredients)
    displayAppareilsList(data.appareils)
    displayUstensilesList(data.ustensiles)
}
 export function displayIngredientsList(ingredients){
        const listContainer = document.getElementById("dropdown_ingredients_content")
        const content = ingredients.map(item => `<li>${item}</li>`).join('')
        listContainer.innerHTML = content
 }
 export function displayAppareilsList(appareils){
    const listContainer = document.getElementById("dropdown_appareils_content")
    const content = appareils.map(item => `<li>${item}</li>`).join('')
    listContainer.innerHTML = content
}
export function displayUstensilesList(ustensiles){
    const listContainer = document.getElementById("dropdown_ustensiles_content")
    const content = ustensiles.map(item => `<li>${item}</li>`).join('')
    listContainer.innerHTML = content
}



export function filterIngredients(value){
    const resultat = detailsRecettes.ingredients.filter( ingredient => ingredient.includes(value) )
    displayIngredientsList(resultat)
}

    const dropdownBtns = document.querySelectorAll('.dropdown-btn')
    dropdownBtns.forEach( function(bouton){
        bouton.addEventListener('click', function(){
            const parent = bouton.parentNode;
            bouton.classList.toggle('hidden')
            const liste = parent.querySelector('.dropdown-content')
            liste.classList.toggle('visible')
        });
    })