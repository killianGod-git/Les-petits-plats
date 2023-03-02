const mainSearch = document.getElementById('searchbar')
const secondSearchContainer = document.getElementById('filtres_precis')
const secondSearch = secondSearchContainer.querySelectorAll('input')


console.log(secondSearch)
mainSearch.addEventListener('keyup', function(text){
    console.log(mainSearch)
})