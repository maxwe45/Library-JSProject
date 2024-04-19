//Html elements
const addBookForm = document.querySelector('.addBookForm');
const showForm = document.querySelector('#showForm');
const closeForm = document.querySelector('#close');
const submitBttn = document.querySelector('#submit');
const library = document.querySelector('.library');

const myLibrary = [];

//Constructor for book takes title,author,pages,if its been read
function Book(name,author,pages,beenRead) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.beenRead = beenRead;
};
//Function to add a book to a library using the form in the website
function addBookToLibrary() {
    const title = document.getElementById('name').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const hasBeenRead = document.querySelector('#hasBeenRead').checked;
    const newBook = new Book(title,author,pages,hasBeenRead);
    myLibrary.push(newBook)
}
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

});