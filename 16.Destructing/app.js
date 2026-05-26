//  Destructing


// let langs = ["C#", "C++", "JavaScript", "Python"];
// let lang1, lang2, lang3, lang4;


// lang1 = langs[0];
// lang2 = langs[1];
// lang3 = langs[2];
// lang4 = langs[3]

//  [lang1, lang2,lang3,lang4] = langs


// console.log(lang1,lang2,lang3, lang4);



// const calc = (a,b) => {
//     const plus = a + b;
//     const minus = a - b;
//     const times = a * b;
//     const dividedBy = a / b;

//     const arr = [plus, minus, times, dividedBy];
//     return arr;
// }

// let[a,b,c,d] = calc(10, 2)

// console.log(a,b,c,d);



const person = {
    firstName : "Oruj",
    lastName: "Ramazanov",
    salary: 500,
}


// let ad, soyad, maas;

// ad = person.firstName;
// soyad = person.lastName;
// maas = person.salary;

let{firstName, lastName,salary} = person;


console.log(firstName, lastName,salary);
