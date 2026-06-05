// OOP 


class People{ // sinif

    /*
    1-özəlliklər(this)
    2 - konstruktiv method
    3- Function

    */

    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

    showInfo(){
        console.log(`Ad: ${this.firstName} Soyad: ${this.lastName} Maaş: ${this.salary}`);
    }
}

const people1 = new People("Oruj", "Ramazanov", 5000);
const people2 = new People("Murad", "Ahmadli", 500)
// const people2 = new People()
people1.showInfo()
people2.showInfo();