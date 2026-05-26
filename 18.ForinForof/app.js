//  For in - For of loops



let names = ["Oruj", "Elmar", "Ali", "Ahmad"];

// names.forEach(function(name){
//     console.log(name);
// })


// names.forEach(name => console.log(name))


//  For in loop


// for(let name in names){
//     console.log(name, names[name]);
// }

//  for of loop

for(let name of names){
    console.log(name, names.indexOf(name));
}