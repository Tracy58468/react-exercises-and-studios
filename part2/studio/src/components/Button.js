import SaveButton from "./SaveButton";
import ClickedButton from "./ClickedButton";
// import saveButton from "../App";
import "./styling.css";

function Button(props) {
  const saveButton = props.saveButton;
  let button = {saveButton} ? <SaveButton /> : <ClickedButton />;
  return button;
 }
 
 export default Button;
 
 //need to import SaveButton and ClickedButton
 //create conditional for these buttons
 //import styling
 //saveButton={true}