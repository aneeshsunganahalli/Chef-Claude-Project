export default function Main() {
const ingredients = []

 function Submit(event){
  event.preventDefault()
  const formData = new FormData(event.currentTarget)
  const newIngredient = formData.get("ingredient")
  ingredients.push(newIngredient)
  console.log(ingredients)
 }
    
  

  return(
    <main>
      <form onSubmit={Submit} className="add-ingredient-form">
        <input 
          type="text" 
          placeholder="e.g. oregano"
          name="ingredient" />
        <button>
          Add ingredient
        </button>
      </form>
    </main>
  )
}