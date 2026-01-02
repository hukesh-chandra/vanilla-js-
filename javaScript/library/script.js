const app = document.createElement("div");
document.body.appendChild(app);
const library =[];
const libraryDiv = document.createElement("div");
libraryDiv.classList.add("library");
app.appendChild(libraryDiv);

function Book(title,author,pages){
  this.id= crypto.randomUUID();
  this.title =title;
  this.author= author;
  this.pages= pages;
  this.completed =false;
}

function addBook(title,author,pages){
  const book = new Book(title,author,pages);
  library.push(book);
}

addBook("asd","adada","56");

function displayBook(){
  libraryDiv.innerHTML="";

  for(const book of library){
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    bookDiv.id = book.id;
    libraryDiv.appendChild(bookDiv);

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("title")
    const titleSpan = document.createElement("span");
    titleSpan.textContent=book.title;
    titleDiv.appendChild(titleSpan);
    bookDiv.appendChild(titleDiv);

    const authorDiv = document.createElement("div");
    authorDiv.classList.add("author")
    const authorSpan = document.createElement("span");
    authorSpan.textContent=book.author;
    authorDiv.appendChild(authorSpan);
    bookDiv.appendChild(authorDiv);
    
    const pagesDiv = document.createElement("div");
    pagesDiv.classList.add("pages")
    const pagesSpan = document.createElement("span");
    pagesSpan.textContent=book.pages;
    pagesDiv.appendChild(pagesSpan);
    bookDiv.appendChild(pagesDiv);

    const readStatusDiv = document.createElement("div");
    readStatusDiv.classList.add("readStatusDiv");
    const readStatus = document.createElement("input");
    readStatus.type="checkbox";
    readStatus.checked = book.completed;
    readStatusDiv.appendChild(readStatus);
    bookDiv.appendChild(readStatusDiv);
    readStatus.classList.add("readStatus");
    readStatus.dataset.id = book.id;


    const removeBookButtonDiv = document.createElement("div");
    removeBookButtonDiv.classList.add("removeBookButtonDiv");
    const removeBookButton = document.createElement("button");
    removeBookButton.textContent = "Remove Book"
    removeBookButtonDiv.appendChild(removeBookButton);
    bookDiv.appendChild(removeBookButtonDiv);
    removeBookButton.classList.add("removeBookButton");
    removeBookButton.dataset.id = book.id;


  }
}
const newBookButtonDiv = document.createElement("div");
newBookButtonDiv.classList.add("newBookButtonDiv");
const newBookButton = document.createElement("button");
newBookButton.textContent = "New Book"
newBookButtonDiv.appendChild(newBookButton);
app.appendChild(newBookButtonDiv);
newBookButton.classList.add("newBookButton");

const dialog = document.createElement("dialog");
dialog.classList.add("book-dialog");


const form = document.createElement("form");
form.method = "dialog"; // important

const titleInput = document.createElement("input");
titleInput.placeholder = "Title";

const authorInput = document.createElement("input");
authorInput.placeholder = "Author";

const pagesInput = document.createElement("input");
pagesInput.type = "number";
pagesInput.placeholder = "Pages";

const submitBtn = document.createElement("button");
submitBtn.textContent = "Add Book";
submitBtn.type = "submit";

const cancelBtn = document.createElement("button");
cancelBtn.textContent = "Cancel";
cancelBtn.type = "button";

form.append(
  titleInput,
  authorInput,
  pagesInput,
  submitBtn,
  cancelBtn
);

dialog.appendChild(form);
app.appendChild(dialog);


newBookButton.addEventListener("click", () => {
  dialog.showModal();
});

cancelBtn.addEventListener("click", () => {
  dialog.close();
});

libraryDiv.addEventListener("click", (e) => {
  if (!((e.target.classList.contains("removeBookButton")) || (e.target.classList.contains("readStatus")))) return;

  const bookId = e.target.dataset.id;

  const bookIndex = library.findIndex(
    (book) => book.id === bookId
  );

  if(e.target.classList.contains("removeBookButton")){
    library.splice(bookIndex, 1)
  }else{
    library[bookIndex].completed = e.target.checked;
  }
  displayBook();
});



form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    !titleInput.value ||
    !authorInput.value ||
    !pagesInput.value
  ) {
    alert("Please fill all fields");
    return;
  }

  addBook(
    titleInput.value,
    authorInput.value,
    pagesInput.value
  );

  displayBook();
  form.reset();
  dialog.close();
});




displayBook();