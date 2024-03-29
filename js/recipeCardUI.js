export function recipeCard(recipe){
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