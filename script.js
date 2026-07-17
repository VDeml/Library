
function Book(title, author, pages, read) {
    if(!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        console.log(`${title} by ${author} has ${pages} pages and I ${read} it.`)
    }
}

const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", "295", "read"); 

const item = {
    value: 5,
    string: "yeah"
}
/////////////////////////////

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
  this.sayName = function() {
    console.log(this.name);
  };
}

const player1 = new Player("steve", "X");
const player2 = new Player("also steve", "O");

Player.prototype.sayHello = function() {
  console.log("Hello, I'm a player!");
}; 

/*console.log(Object.getPrototypeOf(player1)) // returns true */
console.log(player1.valueOf());

