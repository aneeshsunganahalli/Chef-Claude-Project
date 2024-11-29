import React from "react"

export default function Main() {
const [ingredients, setIngredients] = React.useState([])

const ingredientsListItems = ingredients.map(ingredient => (
  <li key={ingredient}>{ingredient}</li>
))

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

      <section>
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list">{ingredientsListItems}</ul>
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe!</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button>Get a recipe</button>
        </div>
      </section>
      
    </main>
  )
}


