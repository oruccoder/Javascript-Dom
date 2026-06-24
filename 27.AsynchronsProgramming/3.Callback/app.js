// CALLBACK NEDIR ?

// Callback -- başqa bir funksiyaya parametr kimi göndərilən və sonradan çağırılan funksiyadır.

// timing - events - Http requests(asinxron) 


// function getName(){
//     console.log("Oruj");
// }

// function getSurname(){
//     console.log("Ramazanov");
// }

// getName();
// getSurname();


// function getName(callback){
//     setTimeout(() => {
//         // Servisdən adımı gətir
//         console.log("Oruj");
//         callback();
//     }, 1000);
// }

// function getSurname(){
//     setTimeout(() => {
//         console.log("Ramazanov");
//     }, 500);
// }

// getName(getSurname)

// getName()
// getSurname()




// function getName(callback){
//     setTimeout(() => {
//         // Servisdən adımı gətir
//         console.log("Oruj");
//         callback();
//     }, 1000);
// }

// function getSurname(){
//     setTimeout(() => {
//         console.log("Ramazanov");
//     }, 500);
// }

// getName(getSurname)




function hesabla(a,b,callback){
    callback(a, b)
}

function topla(x,y){
    console.log(x + y);
}

// hesabla(5,10, topla)
hesabla(5,10,topla)