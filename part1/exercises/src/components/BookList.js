export default function BookList() {
   let pageTitle = "Book List";
   let book1 = "https://mpd-biblio-covers.imgix.net/9781250826794.jpg";
   let book2 = "https://mpd-biblio-covers.imgix.net/9781250196552.jpg";
   let book3 = "https://mpd-biblio-covers.imgix.net/9781250213594.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} width = "10%" alt="Witch King, by Martha Wells" />
         <img src={book2} width = "10%" alt="The Book of Gems, by Fran Wilde" />
         <img src={book3} width = "10%" alt="Across the Green Grass Fields, by Seanan McGuire" />
      </div>      
   );
}