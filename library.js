//Html elements
const addBookForm = document.querySelector('.addBookForm');
const showForm = document.querySelector('#showForm');
const closeForm = document.querySelector('#close');
const submitBttn = document.querySelector('#submit');
const library = document.querySelector('.library');
//Array of books that are displayed on page
let myLibrary = [];

//Constructor for book takes title,author,pages,if its been read
function Book(name,author,pages,beenRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.beenRead = beenRead;
};
//Function to add a book to a library using the form in the website
function addBookToLibrary() {
    let title = document.getElementById('name').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let hasBeenRead = document.querySelector('#hasBeenRead').checked;
    let newBook = new Book(title,author,pages,hasBeenRead);
    myLibrary.push(newBook);
};
//Function for the delete button on books to remove that book from the library
const removeBook = badBook => {
    myLibrary = myLibrary.filter(book => book.name !== badBook,Book);
};
//Prototype for Book constructor to toggle the status of read on the read button for each book
Book.prototype.toggleRead =  function () {
    this.beenRead = !this.beenRead
}

//Function to display the books that are added by user, with addition of button to toggle its read status and remove it from the 
//library array as well as the book on the page display.
const display = () => {
    let book = myLibrary[myLibrary.length - 1];
    const libraryEl = document.querySelector('.library');
    let div = document.createElement('div');
    div.classList.add('card');
    libraryEl.appendChild(div);

    //Declares a delete button for the book added 
    let delBttn = document.createElement('button');
    delBttn.classList.add('deleteBttn');
    delBttn.textContent = 'Remove';

    // html elements to display book info
    let bookTitle = document.createElement('p');
    let bookAuthor = document.createElement('p');
    let bookPages = document.createElement('p');
    let read = document.createElement('button');
    // html classes for the html elements
    bookTitle.classList.add('bookTitle');
    bookAuthor.classList.add('bookAuthor');
    bookPages.classList.add('bookPages');
    read.classList.add('bookRead');
    // html element text contents
    bookTitle.textContent = book.name;
    bookAuthor.textContent = `by ${book.author}`;
    bookPages.textContent = `${book.pages} pages`;
    read.classList.add('cardBttn');
    delBttn.classList.add('cardBttn');

    //Function to add read button class for its status
    const readClass = () => {
        if(book.beenRead===true){
        read.classList.remove('bookReadFalse');
        read.classList.add('bookReadTrue')
        }else{
        read.classList.remove('bookReadTrue');
        read.classList.add('bookReadFalse')}};
    readClass()

    //Read button that toggles the read status with the Book prototype toggleread and readText to update the button text content
    read.addEventListener('click', () => {
        book.toggleRead();
        readText();
        readClass();
    })
    //Removes the book from the myLibrary array and the div html element
    delBttn.addEventListener('click', () => {
        removeBook(book.name);
        div.remove();
    })
    //Shows read buttons text content as either read or not and adds to a seperate class
    let readText = () =>{
        if(book.beenRead === true){
            read.textContent = 'Read';
        }
        else{
            read.textContent = 'Not Read'}};
    readText();
    
    div.appendChild(bookTitle);
    div.appendChild(bookAuthor);
    div.appendChild(bookPages);
    div.appendChild(read);
    div.appendChild(delBttn);
};

//Button to show the add book form
showForm.addEventListener('click', () => {
    addBookForm.show()
});
//Button to close the add book form
closeForm.addEventListener('click', ()=> {
    addBookForm.close()
});
//Submit button adds the submitted form info to myLibrary using addBookToLibrary
submitBttn.addEventListener('click', ()=> {
    addBookToLibrary();
    display()
});