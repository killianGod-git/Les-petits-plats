import { recipes } from "./index.js";

function recipeCard(recipe){
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
                <ul id="liste_ingredients">
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>
                    <li>1</li>

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
    recipes.forEach(recipe => {
        const section = document.getElementById('section_recettes')
        
        
    section.innerHTML += recipeCard( recipe)
    });
const description = document.querySelectorAll('.description');
const maxLength = 150;
description.forEach(text =>{
    if (text.innerHTML.length > maxLength) {
        const truncatedText = text.innerHTML.slice(0, maxLength) + "...";
        text.innerHTML = truncatedText;
      }
})
}

