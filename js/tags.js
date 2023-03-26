const listeIngredients = document.getElementById("dropdown_ingredients_content");
const tags = document.getElementById("tags");

export function tagCreation(){
    listeIngredients.querySelectorAll("li").forEach(item => {
	    item.addEventListener("click", function() {
    		const tag = document.createElement("span");
	    	tag.classList.add("tag");
		    tag.innerHTML = item.innerHTML;
	    	tags.appendChild(tag);
		    item.classList.add("disabled");
		});
	})
};