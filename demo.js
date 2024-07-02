var a = Math.random()

console.log(Math.floor(a * 10) );  


var popupOverRelay = document.querySelector('.popup-overlay');
var popupBox = document.querySelector('.popup-box');

var addPopupBtn = document.getElementById('addButton');

addPopupBtn.addEventListener("click", function() {
    popupOverRelay.style.display = "block";
    popupBox.style.display = "block"
})


var container = document.querySelector('.container')
var addBookNew = document.getElementById('bookAdd');
var bookTitleInput = document.getElementById('bookTitleInput');
var bookAuthorInput = document.getElementById('bookAuthorInput');
var shortDescription = document.getElementById('bookDescriptionInput')

addBookNew.addEventListener('click', function(event) {
    event.preventDefault();
    var createElementNew = document.createElement('div');

    createElementNew.setAttribute('class', 'book-container')
    createElementNew.innerHTML = `  <h2>${bookTitleInput.value}</h2>
            <h5>${bookAuthorInput.value}</h5>
            <p>${bookDescriptionInput.value}</p>
            <button onclick="deleteElement(event)">Delete</button>`;
    container.append(createElementNew)
    popupOverRelay.style.display = 'none';
    popupBox.style.display = 'none'
})

function addBook() {

}

var cancelPopup = document.getElementById('bookCancel');

cancelPopup.addEventListener("click", function(event) {
    event.preventDefault();
    popupOverRelay.style.display = "none";
    popupBox.style.display = "none";
})

function cancelBook() {

}

function deleteElement(event) {
    event.target.parentElement.remove()
}