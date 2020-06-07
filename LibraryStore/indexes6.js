console.log('tut with es6');

class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display {
    add(book) {
        console.log('Adding to UI');
        let tableBody = document.getElementById('tableBody');
        console.log(book);
        let uiString = `<tr>
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                        </tr>`;
        tableBody.innerHTML += uiString;
    }
    clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset();
    }

    validate(book) {
        if (book.name.length < 2 || book.author.length < 2) {
            return false;
        } else {
            return true;
        }
    }

    show(type,displayMessage) {
        let message = document.getElementById('message');
        message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                                <strong>Message:</strong> ${displayMessage} 
                                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </div>`;
        setTimeout(function(){
            message.innerHTML = ''
        },4000);
    }
}

// Add submit event listner to libraryForm
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('you have submitted library form');
    let name = document.getElementById('bookname').value;
    let author = document.getElementById('author').value;

    // fiction,programming ,cooking
    let fiction = document.getElementById('fiction');
    let Programming = document.getElementById('computerProgramming');
    let cooking = document.getElementById('cooking');

    let type;

    if (fiction.checked) {
        type = fiction.value;
    } else if (Programming.checked) {
        type = Programming.value;
    } else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success','Your book has been successfully added.');
    } else {
        display.show('danger','Sorry you cannot  add this book.');
    }


    e.preventDefault();
}