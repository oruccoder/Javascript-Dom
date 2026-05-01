// Mouse Events


// DomContentLoaded
// load
// Click
// dblClick
// mouseOver
// mouseOut
// mouseenter
// mouseleave

// ! DomContentLoaded

// document.addEventListener("DOMContentLoaded", run)


// function run(e){
//     // alert("Səhifə Yeniləndi!")
//     console.log("Səhifə Yeniləndi!");

// }

// ! load

// window.addEventListener("load", run)


// function run(e){
//     alert("Səhifə Yeniləndi!")
//     console.log(e.target);
// }

// ! Click


const cardTitle  = document.querySelector(".CardTitle")
const cardBody = document.querySelector(".card-body")


// cardTitle.addEventListener("click", run)
// cardTitle.addEventListener("dblclick", run)


// cardBody.addEventListener("mouseover", run)
// cardBody.addEventListener("mouseout", run)


cardBody.addEventListener("mouseenter", run)
cardBody.addEventListener("mouseleave", run)


function run(e){
    console.log(e.type);
}