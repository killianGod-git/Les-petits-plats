import {  decomposeRecettes } from "./index.js";
import { displayDropdown } from "./dropdownFilter.js";
import { recipeCard } from "./recipeCardUI.js";



export function displayRecipe(recipes){
    const section = document.getElementById('section_recettes')
    section.innerHTML = ""
    recipes.forEach(recipe => {
        section.innerHTML += recipeCard( recipe)
    });
    const detailsRecettes = decomposeRecettes(recipes)
    displayDropdown(detailsRecettes)
    const description = document.querySelectorAll('.description');
    const maxLength = 150;
    description.forEach(text =>{
        if (text.innerHTML.length > maxLength) {
            const truncatedText = text.innerHTML.slice(0, maxLength) + "...";
            text.innerHTML = truncatedText;
        }
    })
}

