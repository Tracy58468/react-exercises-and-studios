import styles from './Ingredients.module.css';

export default function RecipeIngredients() {
  let ingredients = ["2 large eggs", "3/4 cup milk", "1/2 cup water", "1 cup flour", "3 tablespoons melted butter"];

  return(
    <div>
      <h3>Recipe Ingredients</h3>
      <ul className = {styles.ingredientList}>
        <li>{ingredients[0]}</li>
        <li>{ingredients[1]}</li>
        <li>{ingredients[2]}</li>
        <li>{ingredients[3]}</li>
        <li>{ingredients[4]}</li>
      </ul>
 </div>
  )
};