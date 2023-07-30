export default function HobbyLinks () {
 let hobbyLinks = ["https://publishing.tor.com/", "https://wordpress.org"]
 return (
    <>
       <h3>Hobbies</h3>
          <a href = {hobbyLinks[0]}>Reading</a><br />
          <a href = {hobbyLinks[1]}>WordPress</a>
    </>
 );
}