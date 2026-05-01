//  Key Board Events


// keypress: Yalnız hərf və rəqəmlərdə işləyir

// keydown : Klavyaturadakı hərf, rəqəm, capslock, vəs bütün hər şeydə çalışa bilən eventdir

// keyup : Əlini düymədən kəçdiyində çalışan eventdir


// document.addEventListener("keypress", run);
// document.addEventListener("keydown", run)
document.addEventListener("keydown", run)

// function run(e){
//      console.log(e.type);
//      console.log(e.key);
//     console.log(e.keyCode);
// }



// function run(e){
//     console.log(e.keyCode);

//      if(e.keyCode == 116){
//          alert("Səhifə Yenilənmədi!")
//     }

//     if(e.key === "F5"){
//         alert("Səhifə Yenilənmədi!")
//     }

//     e.preventDefault();
    
// }


const cardTitle = document.querySelector(".CardTitle")
const input = document.querySelector("#todoName");



input.addEventListener("keyup", run);


function run(e){
    cardTitle.textContent = e.target.value;

    console.log(e.target.value);
}