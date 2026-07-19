let myLibrary = [];
const content = document.querySelector(".content");
const addBookBtn = document.querySelector(".addBook");
const modal = document.querySelector(".modal");
const cancelBtn = document.querySelector(".formCancel")
const submitBtn = document.querySelector(".formSubmit")

function Book(title, author, pageCount, readBool) {
    if(!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.id = crypto.randomUUID();
    this.readBool = readBool;
}

Book.prototype.changeReadStatus = function() {
  this.readBool = !this.readBool;
}

function addBookToLibrary(title, author, pageCount, readBool) {
  //take params, create book, store in library array
  const book = new Book(title, author, pageCount, readBool);
  myLibrary.push(book);

}

// Just manually adding some books to the array
addBookToLibrary("Lord Of The Rings", "J.R.R Tolkien", 1178, true);
addBookToLibrary("Deep Work", "Cal Newport", 304, false)

// Function for looping over the array, displaying results
function displayLibrary() {
  for (const book of myLibrary) {
    //create new card to append to .content
    const newCard = document.createElement("div");
    newCard.classList.add("bookCard");
    // add unique id dataset to book card
    newCard.dataset.uniqueId = book.id;
    content.appendChild(newCard);   
    // create title for card and append
    const newTitle = document.createElement("h2");
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
    //create read/not read button and give it correct style class
    const newReadStatusBtn = document.createElement("button");
    newReadStatusBtn.classList.add("readStatusBtn");
    if(!book.readBool) {
      newReadStatusBtn.textContent = "No";
      newReadStatusBtn.classList.add("readNo");
    }
    else {
      newReadStatusBtn.textContent = "Yes";
      newReadStatusBtn.classList.add("readYes");
    };  
    newCard.appendChild(newReadStatusBtn);
    // function for toggling YES/NO on read button
    newReadStatusBtn.addEventListener("click", () => {
        book.changeReadStatus();
        // book.readBool = true;
        destroyContent();
        displayLibrary();
    });
    //add remove book button to card
    const newRemoveBook = document.createElement("button");
    newRemoveBook.classList.add("removeBook");
    newRemoveBook.textContent = "Remove Book";
    newCard.appendChild(newRemoveBook);
    newRemoveBook.addEventListener("click", () => {
      const currId = newCard.dataset.uniqueId;
      myLibrary = myLibrary.filter((book) => book.id !== currId);
      destroyContent();
      displayLibrary();
    });
  };
};

// function to display a form to input a whole new book to the array
addBookBtn.addEventListener("click", () => {
  modal.classList.remove("hidden")
});


// cancel form submission, return to main screen
cancelBtn.addEventListener("click", () => {
  modal.classList.add("hidden")
})
// submit form, add book to library
submitBtn.addEventListener("click", (event) => {
  event.preventDefault(); 
  const titleValue = document.getElementById("titleInput").value
  const authorValue = document.getElementById("authorInput").value
  const pagesValue = Number(document.getElementById("pagesInput").value)
  const readValue = document.getElementById("readInputYes").checked;
  addBookToLibrary(titleValue, authorValue, pagesValue, readValue);
  // modal.classList.add("hidden");
  destroyContent();
  displayLibrary();
})

function destroyContent() {
  while (content.hasChildNodes()) {
    content.removeChild(content.firstChild);
  }
}

displayLibrary();