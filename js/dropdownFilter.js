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
        const selectField = document.getElementById("dropdown_ingredients_content")
        console.log(selectField)
        options.forEach(dataOption => {
            const optionDom = `<a href="?${dataOption}">${dataOption}</a>`
            selectField.innerHTML += optionDom
        })
    } else if (type === 'appareils'){
        const options = doublonAppareils()
        const selectField = document.getElementById("dropdown_appareils_content")
        options.forEach(dataOption => {
            const optionDom = `<a href="?${dataOption}">${dataOption}</a>`
            selectField.innerHTML += optionDom
        })
    } else if( type === 'ustensiles'){
        const options = doublonUstensiles()
        const selectField = document.getElementById("dropdown_ustensiles_content")
        options.forEach(dataOption => {
            const optionDom = `<a href="?${dataOption}">${dataOption}</a>`
            selectField.innerHTML += optionDom
        })
    } else{
        console.log('erreur')
    }
    
 }

    createDropdownOptions('ingredients')
    createDropdownOptions('appareils')
    createDropdownOptions('ustensiles')

    
    const dropdownBtnIngredients = document.getElementById("my-ingredients");
    const dropdownContentIngredients = document.getElementById('dropdown_ingredients_content');
    dropdownBtnIngredients.addEventListener('click', function(){
      dropdownContentIngredients.style.display = "block"
    })