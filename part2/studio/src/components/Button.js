import SaveButton from "./SaveButton";
import ClickedButton from "./ClickedButton";
// import saveButton from "../App";
import "./styling.css";

// TRY OTHER STUFF LATER

// function Button(props) {
//   const saveButton = props.saveButton;
//   console.log(`props.saveButton ${props.saveButton}`);
//   // let button;
//   // const saveButton = false;
//   saveButton = ({saveButton} === true) ? <SaveButton /> : <ClickedButton />;
//   // let button = ({saveButton} === true) ? <ClickedButton /> : <SaveButton />;
//   return saveButton; // = ({saveButton} === true) ? <SaveButton /> : <ClickedButton />;;
//  }

function Button(props) {
  return props.saveButton ? <SaveButton /> : <ClickedButton/>;}

 
 export default Button;
  
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 //saveButton={true}