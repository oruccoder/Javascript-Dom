// ? ----------- Promise ------------


// let check = false;
// const promise1 = new Promise((resolve,reject) => {
//     if(check){
//         resolve("Promise uğurludur")
//     }
//     else{
//         reject("Promise uğursuzdur!")
//     }
// })

// console.log(promise1);


// let check = true;

// function checkPromise(){
//     return new Promise((resolve, reject) => {
//         if(check){
//             resolve("Promise uğurludur") // pending -> fulfilled
//         }
//         else{
//             reject("Promise uğursuzdur!")
//         }
//     })
// }

// checkPromise()
// .then((response) => {
//     console.log(response);
// })

// .catch((err) => {
//     console.log(err);
// })

// .finally(() => console.log("Hər zaman çalışar"));


// Promise {
//     state: "fulfilled",
//     value: "Uğurlu"
// }

// Promise {
//     state: "rejected",
//     value: "uğursuz"
// }

// resolve(value)


// ? ---------- Promise + XHMLHTTPREQUEST



// function readStudent(url){
//     return new Promise((resolve,reject) => {
//         const xhr = new XMLHttpRequest;
//         try {
//             xhr.addEventListener("readystatechange", () => {
//                 if(xhr.readyState === 4 && xhr.status === 200){
//                     resolve(JSON.parse(xhr.responseText));
//                 }
//             })
//         } catch (error) {
//             reject(error)
//         }

//         xhr.open("GET", url);
//         xhr.send();
//     })
// }

// readStudent("students.json")
// .then((data) => console.log(data))
// .catch((err) => console.log(err))


function getUsers(url){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest;
        xhr.addEventListener("readystatechange", () => {
            try{
                if(xhr.readyState === 4 && xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText))
                }
            } catch(error){
                reject(error)
            }
        })

        xhr.open("GET", url);
        xhr.send()
    })
}

getUsers("https://jsonplaceholder.typicode.com/users")
.then((data) => {
    data.forEach((user) => {
        console.log(user.name);
    })
    console.log("Daha sonra fərqli Asenxron kodlarını işə sala bilərik!");
    
    
    
})
.catch((err) => console.log(err))
.finally(() => {
    // Mail atma kodlarını yazın
})