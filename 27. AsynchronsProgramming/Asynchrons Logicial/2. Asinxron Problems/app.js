// Asinxron Problemləri  

// Http Requests

const users = [
    {
        userId: 5,
        post: "Js post 1"
    },
    {
        userId: 5,
        post: "Js post 2"
    },
    {
        userId: 5,
        post: "Js post 3"
    },
    {
        userId: 6,
        post: "React post 1"
    },
    {
        userId: 7,
        post: "React post 1"
    }
]

// user id
// post by user id


function getUserId(){
    setTimeout(() => {
        // Servisə getdik və cavabı aldıq
        return 5;
    }, 1000);
}

function getPostById(userId){
    // Gərçək bir rest api-a istək atacaqsınız
    setTimeout(() => {
        users.forEach((user) => {
            if(user.userId === userId){
                console.log(user.post);
            }
        })
    }, 500);
}

let userId = getUserId();
getPostById(userId);