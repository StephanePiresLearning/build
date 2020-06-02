
let favoriteBook = []

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

function addFavoriteBook(bookName){
   if (!bookName.includes('Great')) {
        favoriteBook.push(bookName)
   }
}

function printFavoriteBooks() {
    console.log('Favorite books : ' + String(favoriteBook.length))
    for (bookName of favoriteBook){
        console.log(`${String(bookName)}`)  
    }
}

printFavoriteBooks()

