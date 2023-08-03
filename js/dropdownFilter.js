
import { recipes, detailsRecettes, resultRecipes } from "./index.js";
import { tagsFilterRecipes, selectedTags, filterMainBar } from "./inputFilter.js";
import { displayRecipe } from "./displayRecipe.js";



// création dropdown
export function displayDropdown(data){
    let list = data
    if (data.length === 0 ){
        list = {
            ingredients : [],
            appareils : [],
            ustensiles : []

        }
    }
    displayIngredientsList(list.ingredients)
    displayAppareilsList(list.appareils)
    displayUstensilesList(list.ustensiles)
}
export function displayIngredientsList(ingredients){
    const listContainer = document.getElementById("dropdown_ingredients_content")
    const content = ingredients.map(item => `<li class="tagElement" data-type="ingredients" >${item}</li>`).join('')
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
    }))
}
export function displayAppareilsList(appareils){
const listContainer = document.getElementById("dropdown_appareils_content")
const content = appareils.map(item => `<li class="tagElement" data-type="appareils">${item}</li>`).join('')
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
    }))
}
export function displayUstensilesList(ustensiles){
const listContainer = document.getElementById("dropdown_ustensiles_content")
const content = ustensiles.map(item => `<li class="tagElement" data-type="ustensiles" >${item}</li>`).join('')
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

const mainSearch = document.getElementById('searchbar')
function deleteTags(){
    let deleteTag = document.querySelectorAll('.delete-tag');
        deleteTag.forEach( function(tags){
            tags.addEventListener('click', (e)=>{
                const text=tags.parentNode.querySelector('.tag-item').innerHTML
                tags.parentNode.remove()
                const indexTag = selectedTags.findIndex(item => {
                    return item.tag.trim() === text.trim()
                })
                selectedTags.splice(indexTag, 1)
                let resultats = recipes
                if (selectedTags.length === 0 ){
                    resultats = filterMainBar(mainSearch.value, recipes)
                } else {
                    resultRecipes.recipes = filterMainBar(mainSearch.value, recipes)
                    console.log("resultRecipes.recipes", resultRecipes.recipes)
                    selectedTags.forEach(tag=>{
                        console.log(tag.tag, tag.type )
                        resultats=tagsFilterRecipes(tag.tag, tag.type, false)
                    })
                }
                

                console.log("resultats", resultats)
                displayRecipe(resultats)
            })
        })
    }

