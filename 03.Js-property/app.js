const todo = document.querySelectorAll(".lists")[0]
const text = todo.querySelector("span")

const todoList = document.querySelector("#list-group")

const clearButton = document.querySelector("#todoClearButton");

// const text = document.querySelector("span")

// text.style.color = "red";


text.style.color = "#fff";
todo.style.backgroundColor = "purple"
text.style.fontWeight = "bold";
text.style.paddingTop = "20px";
text.style.paddingLeft = "70px"


text.style.marginTop = "60px"
text.style.marginLeft = "100px"

clearButton.style.backgroundColor = "red";
clearButton.style.fontWeight = "bold";
clearButton.style.padding = "20px;"
clearButton.style.borderRadius = "50px";

console.log(clearButton);
