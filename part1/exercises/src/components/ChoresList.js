import styles from './ChoresList.module.css';

export default function ChoresList () {
   return (
      <>
         <h3 className = {styles.choresHeading}>Chores to do</h3>
            <ul>
               <li className = {styles.choresText}>The first chore I hate to do</li>
               <li className = {styles.choresText}>The second chore I hate to do</li>
            </ul>
            {/* <p className = {styles.choresText}>No content is here!</p> */}
      </>
   );
}