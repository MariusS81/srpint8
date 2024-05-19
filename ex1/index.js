function createRecipe(titlu, portii, ingrediente) {
    const recipe = {
    titlu: titlu,
    portii: portii,
    ingrediente: ingrediente
    };
  
    console.log("Titlu: " + recipe.titlu);
    console.log("Portii: " + recipe.portii);
    console.log("Ingrediente: " + recipe.ingrediente);
  
    return recipe;
}
 
   const titlu = "Pizza";
   const portii = 3;
   const ingrediente = ["mozzarella", "tomatoes", "ham"];
  
   const myrecipe = createRecipe(titlu, portii, ingrediente);