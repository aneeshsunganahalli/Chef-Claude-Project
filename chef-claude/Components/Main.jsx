import React from "react"
import IngredientsList from "./IngredientsList";
import ClaudeRecipe from "./ClaudeRecipe";


export default function Main() {

  const [ingredients, setIngredients] = React.useState([])
  const [recipeShown, setRecipeShown] = React.useState(false)
 
  async function getRecipe(){
    const recipeMarkdown = await getRecipeFromMistral(ingredients)
  }

  function toggle(){
    setRecipeShown(prevShown => !prevShown)
  }

  function addIngredient(event){
    event.preventDefault();
    const formElement = event.currentTarget
    const formData = new FormData(formElement)
    const newIngredient = formData.get("ingredient")
    if(newIngredient !== ""){
    setIngredients(prevIngredients => [...prevIngredients,newIngredient])
    }
    formElement.reset()
  }


 
  return(
    <main>
      <form onSubmit={addIngredient} className="add-ingredient-form">
        <input 
          type="text" 
          placeholder="e.g. oregano"
          name="ingredient" />
        <button>
          Add ingredient
        </button>
      </form>
 
      {ingredients.length > 0 && <IngredientsList 
        getRecipe={toggle}
        ingredients={ingredients}
      />}

        {recipeShown && <ClaudeRecipe/>}
    </main>
  )
}


