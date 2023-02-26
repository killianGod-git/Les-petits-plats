export const getRecipes= async ()=>{
    const responses = await fetch('./js/data/recipe.js')
    const recipes = await responses.json()
    return recipes
}