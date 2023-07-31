export default function HobbyLinks () {
 let hobbyLinks = ["https://publishing.tor.com/", "https://wordpress.org"]
 return (
    <div>
       <h3>Hobbies</h3>
       
          <a href = {hobbyLinks[0]}>Reading</a><br />
          <a href = {hobbyLinks[1]}>WordPress</a>
    </div>
 );
}

/*
The page needs a set of links for the websites you use to keep track of or shop for your favorite hobbies.

    Create a new file called HobbyLinks for a new functional component called HobbyLinks.

    In the HobbyLinks() function, define the variable hobbyLinks and assign it an array that contains two or more URLs for websites that pertain to your hobbies.

    In the return statement for this component, add a set of <a> tags for the web links. Each link should be on its own line.

    Inside each <a> tag, set the href attribute equal to a placeholder for an element in the hobbyLinks array:

       <a href = {hobbyLinks[0]}>Link text...</a>

    Add <HobbyLinks /> to App.js. Save all of your changes, then refresh the page to see your new content.
    */