// Spread Opreators


// let numbers = [10,20,30,40];


// Old Method
// function add(a,b,c,d){
//     console.log(a + b + c + d);
// }

// add(5,10,20,30)

// New method

// add[numbers[0], numbers[1], numbers[2], numbers[3]];

// add(...numbers) ----------- add[numbers[0], numbers[1], numbers[2], numbers[3]];


// ------------------------------------------------------


// const langs1 = ["C#", "Java"];

// // const langs2 = ["Php", "Pyhon", langs1[0], langs1[1]];
// const langs2 = ["Php", "Pyhon", ...langs1];


// console.log(langs2);


//  -----------------------------------------

// const numbers = [1,2,3,4,5,6,7,8,9];

// let[a,b,c, ...qalanSay] = numbers;

// console.log(a,b,c, qalanSay);



//  --------------------------------------------------

// let arr1 = ["Oruj", "Elmar", "Ali", "Ahmad"];
// let arr2 = [];


// arr2[0] = arr1[0];
// arr2[1] = arr1[1];
// arr2[2] = arr1[2];
// arr2[3] = arr1[3];


// arr2 = [...arr1];

// console.log(arr2);


const arr1 = [0,1,2];
const arr2 = [3,4,5];

let arr = [...arr1, ...arr2]

console.log(arr);

