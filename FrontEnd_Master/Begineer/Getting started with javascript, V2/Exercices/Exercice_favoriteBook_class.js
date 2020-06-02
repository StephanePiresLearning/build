class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}

	addFavoriteBook(bookName) {
        if (!bookName.includes("Great")) {
            this.favoriteBooks.push(String(bookName));
        }
    }
    

    printFavoriteBooks() {
        console.log(`Favorite Books: ${String(this.favoriteBooks.length)}`);
        for (let bookName of this.favoriteBooks) {
            console.log(String(bookName));
        }
    }
}

myBookShelf = new Bookshelf()

function loadBooks(Bookshelf) {
	fakeAjax(BOOK_API,function addBooks (listOfBooks){
        for(let book of listOfBooks){
            Bookshelf.addFavoriteBook(book)
        }
        Bookshelf.printFavoriteBooks()
    })
}

var BOOK_API = "https://some.url/api";


// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}

loadBooks(myBookShelf)
