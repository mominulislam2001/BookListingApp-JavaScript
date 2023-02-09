//get the UI elements
let form = document.querySelector('#book-form');
let booklist = document.querySelector('#book-list')


//book class

class Book {
  
    constructor(title,author,isbn){
     this.title = title;
     this.author = author;
     this.isbn = isbn;
    }
   



}

// UI class
class UI {
   constructor(){

   }

   addBookList(book){
       let list = document.querySelector('#book-list');
       let row = document.createElement('tr');

       row.innerHTML = `
       <td>${book.title}</td>
       <td>${book.author}</td>
       <td>${book.isbn}</td>
       <td><a href='#' class="delete">X</a></td>
       
       `
       list.appendChild(row);
       
       
   }
   clearFields(row){
    let title = document.querySelector('#title').value='',
    author = document.querySelector('#author').value='',
    isbn = document.querySelector('#isbn').value='';

   }
   showAlert(message,className){
      let div = document.createElement('div'); 
      div.className = `alert ${className}`
      div.appendChild(document.createTextNode(message));
      let container = document.querySelector('.container');
      let form = document.querySelector('#book-form');
      container.insertBefore(div,form);
      setTimeout(()=>{
        document.querySelector('.alert').remove();
      },3000)
    }

    deleteFromBook(target){
       if(target.hasAttribute('href')){
     target.parentElement.parentElement.remove();
       }
       
    }
  


}

//add event listner


form.addEventListener('submit', newBook);
booklist.addEventListener('click',removeBook);
//define function

function newBook(e){
    let title = document.querySelector('#title').value,
    author = document.querySelector('#author').value,
    isbn = document.querySelector('#isbn').value;
   
    let ui = new UI();

    if(title===''||author===''||isbn===''){
       
        ui.showAlert("Please fill all the fields!","error");


    }else{
        let book = new Book(title,author,isbn);
    
        
        ui.addBookList(book);
        ui.clearFields();
        ui.showAlert("Book Added Succesfully!","success");
    }

  
    e.preventDefault();
}

function removeBook(e){

   let ui = new UI();
   ui.deleteFromBook(e.target);
   ui.showAlert("Book Removed!","success");
   e.preventDefault();
}