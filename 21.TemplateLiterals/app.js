// Template Literals ----- + 

function write(firstName, lastName){
    // console.log("Name: " + firstName + " " + lastName);
    console.log(`Name : ${firstName} Surname: ${lastName}`);
}

// write("Oruj", "Ramazanov")


function getUserById(userId){
    // fetch("http://localhost:8080/user/" + userId);
    console.log(`http://localhost:8080/user/${userId}`);
}

getUserById(10)