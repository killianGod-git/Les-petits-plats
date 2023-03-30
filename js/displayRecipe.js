import {  decomposeRecettes } from "./index.js";
import { displayDropdown } from "./dropdownFilter.js";

function recipeCard(recipe){
    const ingredientElement = recipe.ingredients.map(ingredient => `<li>${ingredient.ingredient}</li>`).join('')
    const cardRecipe = `
    <article class="recette" id="${recipe.id}">
    <div class="recette_image">
        <img src="#" alt="#">
    </div>
    <div class="recette_content">
        <div class="recette_header">
            <div class="recette_titre">
                <h2>${recipe.name}</h2>
            </div>
            <div class="recette_temps">
                <h2>${recipe.time} min</h2>
            </div>
        </div>
        <div class="recette_infos">
            <div class="recette_ingredients">
                <ul class="liste_ingredients">
                    ${ingredientElement}
                </ul>
            </div>
            <div class="recette_description">
            
                <p class="description">${recipe.description}</p>
            </div>
        </div>
        
    </div>
</article>`
return cardRecipe
}

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

