//  Map  -------------> key and value

// for
// forEach
// for of
// for In

// let arr = [1,2,3];

const map1 = new Map();

// map1.set(1, "Oruj");
// map1.set(true,5);
// map1.set([1,2,3], {firstName: "Elmar"})
// map1.set(false, 5)


map1.set(10,"Baku");
map1.set(55, "Shaki");
map1.set(34, "Gabala");
map1.set(43, "Zaqatala");

// GET

// console.log(map1.get(10));
// console.log(map1.get(55));

// let returnValue = map1.get(55);
// console.log(returnValue);


// SIZE

let value;


// value = map1.size;

// DELETE

// value = map1.delete(15)
// console.log(value);

// console.log(map1.size);

// HAS

// console.log(map1.has(90));


// ! FOR OF MAP Üzərində Dönə Bilərik.


// for(let value of map1){  //destucting
//     console.log(key,value);
// }


// let arr = [10, "Baku"];
// let[a,b] = arr;

// console.log(a,b);

// for(let [key,value] of map1){ // destructing
//     console.log(value);
// }


// KEYS

// const mapKeys = map1.keys();
// console.log(mapKeys);


// mapKeys.forEach((key) => {
//     console.log(key);
// })

// Arr-Çevirmək üçün

// const mapKeys = Array.from(map1.keys())
// console.log(mapKeys);

// Qısa yolu!
// for(let value of map1.keys()){
//     console.log(value,map1.get(value));
// }

// Map-dən Array-ə Çevirmək

// const arr2 = [
//     [10, "Baku"],
//     [55, "Shaki"],
//     [33, "Gabala"],
//     [43, "Zaqatala"]
// ]

// const arr = Array.from(map1);
// console.log(arr);

// arr.forEach((value) => {
//     console.log(value);
// })


// ARRAY`i MAP-E Çevirmək

// const arr2 = [
//     [10, "Baku"],
//     [55, "Shaki"],
//     [33, "Gabala"],
//     [43, "Zaqatala"]
// ]


// const myMap = new Map(arr2);
// console.log(myMap);

// const words = ['Apple', 'orange', 'banana', 'Mango'];
// const newMap = words.map(words => words.length);
// console.log(newMap);

// const posts = [
//     {id:1, title: "Sample Title 1", description: "Frontend Developer"},
//     {id:2, title: "Sample Title 2", description: "Backend Developer"},
//     {id:3, title: "Sample Title 3", description: "Full-Stack Developer"},
// ]

// const postId = posts.map((post) => post.id);
// const postSample = posts.map((post) => post.title)

// console.log(postId);
// console.log(postSample);

