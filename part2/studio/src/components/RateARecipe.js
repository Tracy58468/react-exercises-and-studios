let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {

 function GiveRating() {
    return <h3>{stars[props.rating - 1]}</h3>;
 } 

 stars = props.rating < 6 && props.rating > 0 ? <GiveRating /> : null;

  return stars;
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js 
