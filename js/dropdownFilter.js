
import { recipes, detailsRecettes } from "./index.js";

// 
// 
// fonctions création dropdown a refactoriser 
// trop de répétitions dans le code 
// 
// 
// ingredients fonctions

// création dropdown
export function displayDropdown(data){
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

export function filterElements(value, type){
    switch(type){
        case 'ingredients' :
            console.log(detailsRecettes, 'detailsRecettes')
            const resultatIngredients = detailsRecettes.ingredients.filter( ingredient => ingredient.includes(value) )
            displayIngredientsList(resultatIngredients)
        break
        case 'appareils' :
            const resultatAppareils = detailsRecettes.appareils.filter( appareil => appareil.includes(value) )
            displayAppareilsList(resultatAppareils)
        break
        case 'ustensiles' :
            const resultatUstensiles = detailsRecettes.ustensiles.filter( ustensile => ustensile.includes(value) )
            displayUstensilesList(resultatUstensiles)
    }
}

const dropdownBtns = document.querySelectorAll('.dropdown-btn')
    dropdownBtns.forEach( (bouton) => {
        bouton.addEventListener('click', function(){
            const parent = bouton.parentNode;
            bouton.classList.toggle('hidden')
            const liste = parent.querySelector('.dropdown-content')
            liste.classList.toggle('visible')
        });
    })