import data from './../data.json';
import {useState} from 'react';

function MyProjects() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index < data.projects.length - 1) {
      setIndex(index +1);
    } else {
      setIndex(0);
    }
  }

  let projects = data.projects;
  let project = projects[index];
  
  return(
    <div>
      <button onClick = {handleClick}>Next</button>
      <h2>{project.fakeKey1}</h2>
      <h3>{project.fakeKey2}</h3>
      <img src = {project.someRandomImage} alt = {project.alt} className = "img"/>
    </div>
  );
};

export default MyProjects;

// "someRandomImage": "./images/pexels-anni-roenkae-5278835 small.jpg",