const inputs = document.querySelectorAll('input')
const recipeBloc = document.querySelectorAll('article')
const ingredientsListe = document.getElementById('dropdown_ingredients_content')
const appareilsListe = document.getElementById('dropdown_appareils_content')
const ulstensilesListe = document.getElementById('dropdown_ustensiles_content')


console.log(inputs)
inputs.addEventListener('keyup', function(text){
    console.log(text)
})