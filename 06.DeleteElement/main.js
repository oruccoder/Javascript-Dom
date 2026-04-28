// Element Silmək


const todoList = document.querySelector("#list-group");
const todos = document.querySelectorAll(".lists")
const todo1 = document.querySelector(".lists")

// todos[0].remove();
// todos[1].remove();

// todos[todos.length -1].remove();



console.log(todos);


// todo1.remove();

// todoList.removeChild(todos[0]);
// todoList.removeChild(todos[todos.length -1])
todoList.removeChild(todoList.lastElementChild)