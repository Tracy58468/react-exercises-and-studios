import './styles.css';

function Button() {

   return ( 
         <button onClick = {onLearnMore}>
            Learn More
         </button>
   );
   function onLearnMore() {
      alert("Splish Splash");
   }
}

export default Button;