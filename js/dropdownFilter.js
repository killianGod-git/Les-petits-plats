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
 function createDropdownOptions(type){
    if (type === 'ingredients'){
        const options = doublonIngredients()
        const selectField = document.getElementById('my-' + type + '')
        options.forEach(dataOption => {
            const optionDom = `<option value="${dataOption}">${dataOption}</option>`
            selectField.innerHTML += optionDom
        })
    } else if (type === 'appareils'){
        const options = doublonAppareils()
        const selectField = document.getElementById('my-' + type + '')
        options.forEach(dataOption => {
            const optionDom = `<option value="${dataOption}">${dataOption}</option>`
            selectField.innerHTML += optionDom
        })
    } else if( type === 'ustensiles'){
        const options = doublonUstensiles()
        const selectField = document.getElementById('my-' + type + '')
        options.forEach(dataOption => {
            const optionDom = `<option value="${dataOption}">${dataOption}</option>`
            selectField.innerHTML += optionDom
        })
    } else{
        console.log('erreur')
    }
    
 }

    createDropdownOptions('ingredients')
    createDropdownOptions('appareils')
    createDropdownOptions('ustensiles')



        const select = document.getElementById('my-ingredients')
        const input = document.getElementById('search-ingredients')
        input.addEventListener("input", function() {
            const searchTerm = this.value.toLowerCase();
            for (let i = 0; i < select.options.length; i++) {
              if (select.options[i].text.toLowerCase().indexOf(searchTerm) === -1) {
                select.options[i].style.display = "none";
              } else {
                select.options[i].style.display = "block";
              }
            }
          });
    select.addEventListener('click', function(){
        if(input.style.display === 'block'){
            input.style.display = 'none'
            input.focus
        } else{
            input.style.display = 'block'
        }

    })