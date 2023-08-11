const RecipeAuthor = () => {
   let authorLink = "https://www.foodnetwork.com/recipes/alton-brown/";
   let authorPhoto = "https://food.fnr.sndimg.com/content/dam/images/food/editorial/talent/alton-brown/FN-TalentAvatar-Alton-Brown.jpg.rend.hgtvcom.126.126.suffix/1532979092729.jpeg";
   let authorName = "Alton Brown";

   return (
      <div>
         <img src={authorPhoto} alt = "" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["2 large eggs", "3/4 cup milk", "1/2 cup water", "1 cup flour", "3 tablespoons melted butter"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>Crepes</h1>
            <p>Ummy Nummy Crepes!</p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/7/26/2/EA1E09_crepes_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1382545812754.jpeg" width = "400" alt="Crepes" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />

         </div>
      </div>
   );
}