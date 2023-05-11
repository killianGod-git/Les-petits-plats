
import { recipes, detailsRecettes } from "./index.js";
import { tagsFilterRecipes, selectedTags } from "./inputFilter.js";
import { displayRecipe } from "./displayRecipe.js";



// création dropdown
export function displayDropdown(data){
    displayIngredientsList(data.ingredients)
    displayAppareilsList(data.appareils)
    displayUstensilesList(data.ustensiles)
}
export function displayIngredientsList(ingredients){
    const listContainer = document.getElementById("dropdown_ingredients_content")
    const content = ingredients.map(item => `<li data-type="ingredients" >${item}</li>`).join('')
    listContainer.innerHTML = content
    const listLi=listContainer.querySelectorAll('li')
    listLi.forEach(item => item.addEventListener('click', function(e){
        const tags = document.getElementById("tags");
        const tagData = item.innerHTML
        const tag = `<div class="tag ingredients-tag"><span class='tag-item'>${tagData} </span><span class="delete-tag 1"><img src="./img/delete.svg" /></span></div>`
        tags.innerHTML += tag;
        item.classList.add("disabled");
        const resultRecipe = tagsFilterRecipes(tagData, 'ingredients')
        deleteTags()
        // displayRecipe(resultRecipe)
    }))
}
export function displayAppareilsList(appareils){
const listContainer = document.getElementById("dropdown_appareils_content")
const content = appareils.map(item => `<li data-type="appareils">${item}</li>`).join('')
listContainer.innerHTML = content
const listLi=listContainer.querySelectorAll('li')
    listLi.forEach(item => item.addEventListener('click', function(e){
        const tags = document.getElementById("tags");
        const tagData = item.innerHTML
        const tag = `<div class="tag appareils-tag"><span class='tag-item'>${tagData} </span><span class="delete-tag 1"><img src="./img/delete.svg" /></span></div>`
        tags.innerHTML += tag;
        item.classList.add("disabled");
        const resultRecipe = tagsFilterRecipes(tagData, 'appareils')
        deleteTags()
        // displayRecipe(resultRecipe)
    }))
}
export function displayUstensilesList(ustensiles){
const listContainer = document.getElementById("dropdown_ustensiles_content")
const content = ustensiles.map(item => `<li data-type="ustensiles" >${item}</li>`).join('')
listContainer.innerHTML = content
const listLi=listContainer.querySelectorAll('li')
    listLi.forEach(item => item.addEventListener('click', function(e){
        const tags = document.getElementById("tags");
        const tagData = item.innerHTML
        const tag = `<div class="tag ustensils-tag"><span class='tag-item'>${tagData} </span><span class="delete-tag 1"><img src="./img/delete.svg" /></span></div>`
        tags.innerHTML += tag;
        item.classList.add("disabled");
        const resultRecipe = tagsFilterRecipes(tagData, 'ustensiles')
        deleteTags()
        // displayRecipe(resultRecipe)
    }))
}

export function filterElements(value, type){
    switch(type){
        case 'ingredients' :
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



    const dropdownBtns = document.querySelectorAll('.dropdown-btn');

dropdownBtns.forEach((bouton) => {
  bouton.addEventListener('click', function() {
    const parent = bouton.parentNode;
    bouton.classList.toggle('hidden');
    const liste = parent.querySelector('.dropdown-content');
    liste.classList.toggle('visible');
  });
  document.addEventListener('click', function(e) {
    if (!e.target.closest('.dropdown-content') && !e.target.closest('.dropdown-btn')) {
      const dropdowns = document.querySelectorAll('.dropdown-content');
      dropdowns.forEach((dropdown) => {
        dropdown.classList.remove('visible');
        if ( bouton.classList.contains("hidden")){
            bouton.classList.toggle('hidden');
        }
      });
    }
  });
});


function deleteTags(){
    let deleteTag = document.getElementsByClassName('delete-tag');
    Array.prototype.forEach.call(deleteTag, function(tags){
        tags.addEventListener('click', (e)=>{
            const text=tags.parentNode.querySelector('.tag-item').innerHTML
            tags.parentNode.remove()
            const indexTag = selectedTags.findIndex(item => {
                return item.tag.trim() === text.trim()
            })
            selectedTags.splice(indexTag, 1)
           
            let resultats=recipes
            selectedTags.forEach(tag=>{
                resultats=filterByTags_(tag.tag, tag.type, resultats)
            })
            displayRecipe(resultats)
        })
    })
}

export function filterByTags_(tag, type, recettes){
    let recipeResult = [] 
    switch (type ){
        case "ingredients" : 
           recettes.forEach(recipe => {
                recipe.ingredients.forEach(ingredient => {
                    if (ingredient.ingredient.toLowerCase() === tag.toLowerCase()){
                        recipeResult.push(recipe)
                    }
                })
            })
        break;
        case 'appareils' : 
           recettes.forEach(recipe => {
                if (recipe.appliance.toLowerCase() === tag.toLowerCase()){
                    recipeResult.push(recipe)
                }
            })
            break;
            case "ustensiles":
               recettes.forEach(recipe => {
                    recipe.ustensils.forEach(ustensil => {
                        if (ustensil.toLowerCase() === tag.toLowerCase()){
                            recipeResult.push(recipe)
                        }
                    })
                })
            break; 
        }
        return recipeResult
    }