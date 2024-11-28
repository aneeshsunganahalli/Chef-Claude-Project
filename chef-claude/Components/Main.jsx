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
  setIngredients(prevIngredients => [...prevIngredients,newIngredient])
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
      <ul>
        {ingredientsListItems}
      </ul>
    </main>
  )
}
