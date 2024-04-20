//Html elements
const addBookForm = document.querySelector('.addBookForm');
const showForm = document.querySelector('#showForm');
const closeForm = document.querySelector('#close');
const submitBttn = document.querySelector('#submit');
const library = document.querySelector('.library');

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
    myLibrary.push(newBook)
};

const removeBook = book => {
    myLibrary = myLibrary.filter(() => this.name !== book.name,Book);
}

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
    div.appendChild(delBttn);
    //Removes the book from the myLibrary array and the div html element
    delBttn.addEventListener('click', () => {
        removeBook(book);
        div.remove();
    })
    
    let bookTitle = document.createElement('p');
    let bookAuthor = document.createElement('p');
    let bookPages = document.createElement('p');
    let read = document.createElement('button');
    bookTitle.classList.add('bookTitle');
    bookAuthor.classList.add('bookAuthor');
    bookPages.classList.add('bookPages');
    read.classList.add('bookRead');

    bookTitle.textContent = book.name;
    bookAuthor.textContent = book.author;
    bookPages.textContent = book.pages;
    div.appendChild(bookTitle);
    div.appendChild(bookAuthor);
    div.appendChild(bookPages);
    
};

//Button to show the add book form
showForm.addEventListener('click', () => {
    addBookForm.show()
})
//Button to close the add book form
closeForm.addEventListener('click', ()=> {
    addBookForm.close()
})
//Submit button adds the submitted form info to myLibrary using addBookToLibrary
submitBttn.addEventListener('click', ()=> {
    addBookToLibrary();
    display()
});