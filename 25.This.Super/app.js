// This & Super & Super();


// ! This
// class Person{
//     constructor(firstName,lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     write(){
//         console.log(this);
//     }
// }

// const person = new Person("Murad","Ahmadli");
// person.write();

// ! super

// class Person{
//     firstName = "Oruj";

//     write(){
//         console.log(this.firstName);
//     }
// }

// class Student extends Person{
//     write(){
//         super.write();
//     }
// }

// const student1 = new Student();
// student1.write();

// ! Super();

class Person{
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

    writeInfo(){
        console.log(this.firstName, this.lastName, this.salary);
    }
}

class Student extends Person{
    constructor(firstName,lastName,salary){
       super(firstName,lastName,salary) 
    }

    writeInfo(){
        super.writeInfo()
    }
}

class Engineer extends Person{
    constructor(firstName,lastName,salary){
        super(firstName,lastName,salary)
    }

    writeInfo(){
        super.writeInfo();
    }
}

const student1 = new Student("Oruj", "Ramazanov", 500);
const engineer1 = new Engineer("Will", "Smith", 1000);
engineer1.writeInfo()
student1.writeInfo();