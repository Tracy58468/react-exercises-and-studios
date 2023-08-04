import data from './../data.json';
import {useState} from 'react';

const listItem = data.map(data =>
  <div>
    <h2>Fun Facts</h2>
    <img src = {data.someRandomImage} alt = {data.alt} className = "img"/>
    <ul>
      <li>{data.fakeKey1}</li>
      <li>{data.fakeKey2}</li>
    </ul>
  </div>
);

function MyProjects() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index < data.projects.length - 1) {
      setIndex(index +1);
    } else {
      setIndex(0);
    }
  }
  
  return(
    <>
      <button onClick = {handleClick}>Next</button>
      <ul>
        {listItem}
      </ul>
    </>
  );
};

export default MyProjects;

// "someRandomImage": "./images/pexels-anni-roenkae-5278835 small.jpg",