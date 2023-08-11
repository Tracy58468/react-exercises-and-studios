import { useState } from 'react';

export default function BoardAssignment () {
   const boards = [
      {
         label: "breakfast", 
         value: "breakfast"
      },
      {
         label: "dessert",
         value: "dessert"
      },
      {
         label: "french foods",
         value: "french foods"
      }
   ];

   const handleChange = (event) => {
      setName(event.target.value);
   }
   // let boardSelected = {};
   const [boardName, setName] = useState('no boards yet!');

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         { boards.map((board) => <option value={board.value}>{board.label}</option>)};
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}