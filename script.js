const myLibrary = [];
content = document.querySelector(".content");

function Book(title, author, pageCount, readBool) {
    if(!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.readBool = readBool;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pageCount, readBool) {
  //take params, create book, store in library array
  const book = new Book(title, author, pageCount, readBool);
  myLibrary.push(book);
  console.log(book);
}

// Just manually adding some books to the array
addBookToLibrary("Lord Of The Rings", "J.R.R Tolkien", 1178, "yes");
addBookToLibrary("Deep Work", "Cal Newport", 304, "yes")

// Function for looping over the array, displaying results
function displayLibrary() {
  for (book of myLibrary) {
    
  }
};
