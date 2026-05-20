const form = document.querySelector("#todoAddForm");
const addInput = document.querySelector("#todoName");
const cardBody = document.querySelector(".card-body");
const todoList = document.querySelector("#list-group");
const todoClearButton = document.querySelector("#todoClearButton");

runEvents();

function runEvents() {
    form.addEventListener("submit", addTodo);

    document.addEventListener("DOMContentLoaded", pageLoaded);
    cardBody.addEventListener("click", removeTodoToUI);
    todoClearButton.addEventListener("click", allTodosDelete)

}

function removeTodoToUI(e){
    console.log(e.target);

    if(e.target.className === "fa fa-remove"){
        // Ekrandan silmə
        console.log("X-e basildi");
        const todo = e.target.parentElement.parentElement;
        todo.remove();

        // Storage-dan silmə
        remmoveTodoToStorage(todo.textContent.trim())
    }
    
}

function remmoveTodoToStorage(removeTodo){
    checkTodoFormStorage();

    const index = todos.indexOf(removeTodo);

    if(index !== -1){
        todos.splice(index, 1)
    }

    localStorage.setItem("todos", JSON.stringify(todos))
}

function allTodosDelete(){
    const todoLists = document.querySelectorAll(".lists");
    if(todoLists.length>0){
        // Ekran silmək
        todoLists.forEach(function(todo){
            todo.remove();
        })

        // Storage-dən silmək
        todos = [];
        localStorage.setItem("todos", JSON.stringify(todos))
    }
    else{
        alert("Silmək üçün ən az bir todo olmalıdır!");
    }
}

function pageLoaded(){
    checkTodoFormStorage();

    todos.forEach(function(todo){
        addTodoToUI(todo)
    })
}

function addTodo(e) {

    e.preventDefault();

    console.log("Submit event is working!");

    const inputText = addInput.value.trim();
    if(inputText == null || inputText == ""){
        alert("Bir dəyər girin!");
    }

    else{
        // UI -a əlavə et
        addTodoToUI(inputText);

        // Storage-a əlavə et
        addTodoToStorage(inputText)
    }

}

function addTodoToUI(newTodo){

    //  <li class="lists flex justify-between items-center p-4 hover:bg-gray-50 transition">
    //                         <span class="text-gray-700">Todo 1</span>
    //                         <a href="#" id="remove1" class="text-red-500 hover:text-red-700">
    //                             <i class="fa fa-remove"></i>
    //                         </a>
    //                     </li> 

    const li = document.createElement("li");
    li.className = "lists flex justify-between items-center p-4 hover:bg-gray-50 transition";

    const span = document.createElement("span");
    span.className ="text-gray-700";
    span.textContent = newTodo;

    const a = document.createElement("a");
    a.className = "text-red-500 hover:text-red-700";

    const i = document.createElement("i");
    i.className= "fa fa-remove";

    a.appendChild(i)

    li.appendChild(span);
    li.appendChild(a)

    todoList.appendChild(li);


    addInput.value = "";
    
}

let todos = [];

function addTodoToStorage(newTodo){

    checkTodoFormStorage();
    
    todos.push(newTodo);
    localStorage.setItem("todos", JSON.stringify(todos))
}

function checkTodoFormStorage(){
    if(localStorage.getItem("todos") === null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}