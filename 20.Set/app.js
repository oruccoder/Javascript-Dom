// Set 

const set = new Set();

// add

set.add(true);
set.add(3.15);
set.add("Ahmad");
set.add(7);
set.add({firstName: "Will Smith", password: "123"});
set.add([1,2,3,4,5]);

// console.log(set);


// DELETE

// set.delete("Ahmad");
// set.delete(7)
// console.log(set);

// HAS

// console.log(set.has(7));
// console.log(set.has("Elmar"));


// console.log(set.size);

// FOR OF LOOPS

// for(let value of set){
//     console.log(value);
// }

// const values = Array.from(set);
// values.forEach((value) => {
//     console.log(value);
// })


// ARRAY`Den SET Yaratmaq

let array = ["Ahmad", 7, true, "Ilgar", 15,[1,2,3,4,5]];
const newSet = new Set(array);

console.log(newSet);
