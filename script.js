const myLibrary = [];
content = document.querySelector(".content");
addBookBtn = document.querySelector(".addBook");
modal = document.querySelector(".modal");
cancelBtn = document.querySelector(".formCancel")
submitBtn = document.querySelector(".formSubmit")

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
  // console.log(book);
}

// Just manually adding some books to the array
addBookToLibrary("Lord Of The Rings", "J.R.R Tolkien", 1178, "yes");
addBookToLibrary("Deep Work", "Cal Newport", 304, "")

// Function for looping over the array, displaying results
function displayLibrary() {
  for (book of myLibrary) {
    //create new card to append to .content
    const newCard = document.createElement("div");
    newCard.classList.add("bookCard");
    content.appendChild(newCard);    // add unique id dataset to book card
    newCard.dataset.uniqueId = book.id
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
    if(book.readBool == false) {
      newReadStatusBtn.textContent = "No";
      newReadStatusBtn.classList.add("readNo");
    }
    else {
      newReadStatusBtn.textContent = "Yes";
      newReadStatusBtn.classList.add("readYes");
    };  
    newCard.appendChild(newReadStatusBtn);
    // function for toggling YES/NO on read button THIS SHOULDNT BE HERE! This is just a function for printing out the library to the DOM
    newReadStatusBtn.addEventListener("click", () => {
      if(newReadStatusBtn.classList.contains("readYes")) {
        newReadStatusBtn.classList.remove("readYes")
        newReadStatusBtn.classList.add("readNo")
        newReadStatusBtn.textContent = "No"
        book.readBool = ""
        console.log(book.readBool)
      }
      else if(newReadStatusBtn.classList.contains("readNo")) {
        newReadStatusBtn.classList.remove("readNo")
        newReadStatusBtn.classList.add("readYes")
        newReadStatusBtn.textContent = "Yes"
        book.readBool = "Yes"
        console.log(book.readBool)
      };
    });
    //add remove book button to card
    const newRemoveBook = document.createElement("button");
    newRemoveBook.classList.add("removeBook");
    newRemoveBook.textContent = "Remove Book";
    newCard.appendChild(newRemoveBook);
    newRemoveBook.addEventListener("click", () => {
      content.removeChild(newCard);
    });
    console.log(book)
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
submitBtn.addEventListener("click", () => {
  event.preventDefault(); 
  titleValue = document.getElementById("titleInput").value
  authorValue = document.getElementById("authorInput").value
  pagesValue = document.getElementById("pagesInput").value
  readValue = document.getElementById("readInputYes").checked;
  addBookToLibrary(titleValue, authorValue, pagesValue, readValue);
  // modal.classList.add("hidden");
  console.log(pagesValue, readValue);
  displayLibrary();
})


displayLibrary();