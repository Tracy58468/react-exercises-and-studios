import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
  // "https://www.foodnetwork.com/recipes/alton-brown/crepes-recipe-1911037"
  let authorName = "Alton Brown";
  let authorLink = "https://www.foodnetwork.com/recipes/alton-brown/";
  let authorPhoto = "https://food.fnr.sndimg.com/content/dam/images/food/editorial/talent/alton-brown/FN-TalentAvatar-Alton-Brown.jpg.rend.hgtvcom.126.126.suffix/1532979092729.jpeg";
  return(
    <div className = {StyleSheet.recipeAuthorBlock}>
      <img src = {authorPhoto} alt = "Alton Brown" className = {StyleSheet.imageUpdates} />
      <div>
        <h3>{authorName}</h3>
        <a href = {authorLink}>Food Network - Alton Brown - Crepes</a>
      </div>
    </div>
  )
};

class RecipeDescription extends React.Component {
  render() {
    return(
      <div> 
        <div>
          <h1>Crepes</h1>
          <p>Ummy, nummy crepes</p>
        </div>
        <RecipeAuthor />
      </div>
    );    
  }
};

export default RecipeDescription;