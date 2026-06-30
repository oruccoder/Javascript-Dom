// ? --------------------- Fetch Api -------------------

// callback - promise
//  AJAX(XhmlHttpRequest) --- fetch api

// console.log(this);

// function getStudents(url){
// //   const promise = fetch(url);
// //   console.log(promise);


//     fetch(url)
//     // .then((response) => response.json())
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => console.log(data))  // undifined
//     .catch((err) => console.log(err))

// }

// getStudents("students.json")




// function getData(url){
//     fetch(url)
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))
// }

// getData("https://jsonplaceholder.typicode.com/users")


function saveStudends(){
    fetch("https://jsonplaceholder.typicode.com/users",{
        method: "POST", // qarşı tərəfə data yükləyirik
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: "Oruj",
            salary: 500
        })
    })
}


// {
//     name: "Oruj",
//     age: 25
// }

'{"name": "Oruj", "age": 28}'