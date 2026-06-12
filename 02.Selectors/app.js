//  Selectors - style özəllikləri

// className, id , tag name


// getElementById : id-ə görə element alar
// getElementbyClassName : class adına görə tutur
// getElementByTagName : tag name-ə görə tutar

const button = document.getElementById("todoAddButton")

// console.log(button);
// console.log(button.id);
// console.log(button.getAttribute("id"));


// console.log(button.className);
// console.log(button.getAttribute("class"));


// const classList = button.classList;
// const classList = button.classList[0];


// const classList = button.classList;

// classList.forEach(function(list){
//     console.log(list);
    
// })


// console.log(classList);


// ! Buttonun text-ni almaq

// let buttonText = button.textContent="<b>Add To do</b>".trim();
// let buttonText2 = button.innerHTML="<b>Add To do</b>".trim()

// console.log(buttonText);
// console.log(buttonText2);

// ! getElementbyClassName

// const todoList = Array.from(document.getElementsByClassName("lists"))

// todoList.forEach(function(todo){
//     console.log(todo);
// })


// console.log(todoList);


// ! getElementByTagName


// const forms = Array.from(document.getElementsByTagName("form"))


// forms.forEach(function(form){
//     console.log(form);
// })

// console.log(Array.isArray(forms));

// const todoList = document.getElementsByTagName("li")

// console.log(todoList);

//  getElementById - getElementByClassName - getElementTagName


//  querySelector -- querySelecorAll

// const clearButton = document.querySelector("#todoClearButton")
// console.log(clearButton);


// console.log(document.getElementById("todoClearButton"));


// const todoList = document.querySelector(".lists")

// const todoList = document.querySelectorAll(".lists")
// console.log(todoList);


// const todoList = document.querySelectorAll("li:last-child")
// const todoList = document.querySelectorAll("li:nth-child(3)")

// const todoList = document.querySelectorAll("li:nth-child(odd)")



// const todoList = Array.from(document.querySelectorAll("li:nth-child(odd)"))

// todoList.forEach(function(todo){
//     todo.style.backgroundColor = "lightgrey"
// })

// console.log(todoList);



// backround-color: black;