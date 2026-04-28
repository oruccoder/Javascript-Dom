//  Events

const { createElement } = require("react");

// function changeTitle(e){
//     document.querySelector(".CardTitle").textContent = "Todo List Was Changed"
//     console.log("Title Was Changed");
//     console.log(e);
    
    
//     // code;
// }

// AddEventListener

const clearBtn = document.querySelector("#todoClearButton")

// clearBtn.addEventListener("click", function(){
//     alert("Hello")
// })



clearBtn.addEventListener("click", changeTitle)


function changeTitle(e) {
    // console.log(e);
    // console.log(e.type);
    // console.log(e.target);
    // console.log(e.target.textContent);
    console.log(e.target.className);
    
    
    
}


// ! e(event) ----> hadisə haqqında məlumat gətirən obyektir
// ! e.type ------------> Hansı event baş verdiyini göstərir məsələn Click eventi baş verdi
// ! e.target ----------> Event-in hansı elementində baş verdiyini gösətir



const button = document.querySelector("#btn")
const container = document.querySelector("#container")

button.addEventListener("click", function(){
    const oldText = document.querySelector("#text");
    const newText = createElement("p")
    newText.textContent = "Complated" 

    container.replaceChild(newText, oldText);
})

console.log(button);
