import { recipes, resultRecipes } from "./index.js";
import { displayRecipe } from "./displayRecipe.js";


const mainSearch = document.getElementById('searchbar')
const secondSearchContainer = document.getElementById('filtres_precis')
export const selectedTags = []


function searchRecipes(searchTerm) {
    const partialResult = selectedTags.length <= 0 ? recipes : [];
    let tagIndex = 0;
    while (tagIndex < selectedTags.length) {
        const { type, tag } = selectedTags[tagIndex];
        const list = tagsFilterRecipes(tag, type, false);
        let itemIndex = 0;
        while (itemIndex < list.length) {
            const item = list[itemIndex];
            if (!partialResult.find((re) => re.id === item.id)) {
                partialResult.push(item);
            }
            itemIndex++;
        }
        tagIndex++;
    }

    return filterMainBar(searchTerm, partialResult);
}

export function filterMainBar(searchTerm, recipes) {
    const filteredRecipes = [];
    let i = 0;

    while (i < recipes.length) {
        const recipe = recipes[i];
        const name = recipe.name.toLowerCase();
        const description = recipe.description.toLowerCase();
        
        const ingredientMatch = recipe.ingredients.some(ingredientObj => {
            const ingredient = ingredientObj.ingredient.toLowerCase();
            return ingredient.includes(searchTerm);
        });

        if (name.includes(searchTerm) || description.includes(searchTerm) || ingredientMatch) {
            filteredRecipes.push(recipe);
        }

        i++;
    }

    return filteredRecipes;
}

function filterRecipes() {
    const searchTerm = mainSearch.value;
    const searchedRecipes = searchRecipes(searchTerm.toLowerCase());
    if (searchedRecipes.length !== 0) {
        displayRecipe(searchedRecipes)
    } else {
        const section = document.getElementById('section_recettes')
        const textNoRecipes = `<div class="emptyResult"><p> Aucune recette ne correspond à votre critère… vous pouvez
        chercher « tarte aux pommes », « poisson », etc.</p></div>`
        section.innerHTML = textNoRecipes;
    }


}
export function inputFilterRecipes() {
    mainSearch.addEventListener('input', () => {
        if (mainSearch.value.length >= 3) {
            filterRecipes()
        }
    })
}

export function tagsFilterRecipes(tag, type, addTag = true) {
    let recipeResult = [];
    const recipes = resultRecipes.recipes;

    switch (type) {
        case "ingredients":
            let recipeIndex1 = 0;
            while (recipeIndex1 < recipes.length) {
                const recipe = recipes[recipeIndex1];
                let ingredientIndex = 0;
                const ingredients = recipe.ingredients;

                while (ingredientIndex < ingredients.length) {
                    const ingredient = ingredients[ingredientIndex];
                    if (ingredient.ingredient.toLowerCase() === tag.toLowerCase()) {
                        recipeResult.push(recipe);
                        break; // We found a match, no need to continue searching for this recipe
                    }
                    ingredientIndex++;
                }

                recipeIndex1++;
            }
            break;

        case 'appareils':
            let recipeIndex2 = 0;
            while (recipeIndex2 < recipes.length) {
                const recipe = recipes[recipeIndex2];
                if (recipe.appliance.toLowerCase() === tag.toLowerCase()) {
                    recipeResult.push(recipe);
                }
                recipeIndex2++;
            }
            break;

        case "ustensiles":
            let recipeIndex3 = 0;
            while (recipeIndex3 < recipes.length) {
                const recipe = recipes[recipeIndex3];
                let ustensilIndex = 0;
                const ustensils = recipe.ustensils;

                while (ustensilIndex < ustensils.length) {
                    const ustensil = ustensils[ustensilIndex];
                    if (ustensil.toLowerCase() === tag.toLowerCase()) {
                        recipeResult.push(recipe);
                        break; // We found a match, no need to continue searching for this recipe
                    }
                    ustensilIndex++;
                }

                recipeIndex3++;
            }
            break;
    }

    resultRecipes.recipes = [...recipeResult];
    displayRecipe(resultRecipes.recipes);

    if (addTag) {
        selectedTags.push({ type, tag });
    }

    return recipeResult;
}



