// Html elementləri üzərində gəzinməs
// Html Dom navigation


const todo = document.querySelector(".lists");
const todoList = document.querySelector("#list-group");
const card = document.querySelector(".cards")
const todoLastChild = document.querySelector(".lists:nth-child(3)")


// console.log(card);


let value;

// Parent-dan Child-a

// value = todoList;
// value = todoList.children[0];
// value = todoList.children[1]

// ! Sonuncu Child-i almaq

// value = todoList.children[todoList.children.length -1];
// value = todoList.children[1].textContent = "Changed";


// value = Array.from(todoList.children);

// value.forEach(function(todo){
//     console.log(todo.textContent);
// })


// ! Child-dan Parent-a çatmaq

value = todo;

// value = todo.parentElement;
// value = todo.parentElement.parentElement.parentElement;

// let ul = todo.parentElement;
// let cardBody = ul.parentElement;


// console.log(cardBody);



// ! Qardaşlar arasında gəzinmə

value = todo;

// value = todo.nextElementSibling;
// value = todo.nextElementSibling;

// console.log(value);



// ! PreviousElement LastChild

value = todoLastChild;

value = todoLastChild.previousElementSibling.nextElementSibling;

console.log(value);
