const myLibrary = [];
content = document.querySelector(".content");

function Book(title, author, pageCount, readBool) {
    if(!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.id = crypto.randomUUID();
    if(readBool) {
      this.readBool = true;
    }
    else {
      this.readBool = false;
    }
}

function addBookToLibrary(title, author, pageCount, readBool) {
  //take params, create book, store in library array
  const book = new Book(title, author, pageCount, readBool);
  myLibrary.push(book);
  console.log(book);
}

// Just manually adding some books to the array
addBookToLibrary("Lord Of The Rings", "J.R.R Tolkien", 1178, "yes");
addBookToLibrary("Deep Work", "Cal Newport", 304, "ye")

// Function for looping over the array, displaying results
function displayLibrary() {
  for (book of myLibrary) {
    //create new card to append to .content
    const newCard = document.createElement("div");
    newCard.classList.add("bookCard");
    content.appendChild(newCard);
    // create title for card and append
    const newTitle = document.createElement("h3");
    newTitle.classList.add("titleRow");
    newTitle.textContent = book.title;
    newCard.appendChild(newTitle);
    //create author for card and append
    const newAuthor = document.createElement("p");
    newAuthor.classList.add("authorRow");
    newAuthor.textContent = book.author;
    newCard.appendChild(newAuthor);
    // create page count for card and append
    const newPageCount = document.createElement("p");
    newPageCount.classList.add("pageCountRow");
    newPageCount.textContent = `Page count: ${book.pageCount}`;
    newCard.appendChild(newPageCount);
    //create read/not read button
    const newReadStatusBtn = document.createElement("button")
    newReadStatusBtn.classList.add("readStatusBtn")
    if(book.readBool === false) {
      newReadStatusBtn.textContent = "No"
      newReadStatusBtn.classList.add("readNo")
    }
    else {
      newReadStatusBtn.textContent = "Yes"
      newReadStatusBtn.classList.add("readYes")
    }  
    newCard.appendChild(newReadStatusBtn)
    //add remove book button to card
    const newRemoveBook = document.createElement("button");
    newRemoveBook.classList.add("removeBook")
    newRemoveBook.textContent = "Remove Book"
    newCard.appendChild(newRemoveBook)
  }
};

displayLibrary();