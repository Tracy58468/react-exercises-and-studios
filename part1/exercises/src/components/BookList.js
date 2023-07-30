export default function BookList() {
   let pageTitle = "Book LIst";
   let book1 = "https://mpd-biblio-covers.imgix.net/9781250826794.jpg?w=450";
   let book2 = "https://mpd-biblio-covers.imgix.net/9781250196552.jpg?w=450";
   let book3 = "https://mpd-biblio-covers.imgix.net/9781250213594.jpg?w=450";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Witch King, by Martha Wells" />
         <img src={book2} alt="The Book of Gems, by Fran Wilde" />
         <img src={book3} alt="Across the Green Grass Fields, by Seanan McGuire" />
      </div>      
   );
}