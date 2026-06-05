// Static keys


// class Math{
//    static topla(a,b){
//         console.log(a + b);
//     }

//    static cixar(a,b){
//         console.log(a - b);
//     }

//     vurma(a,b){
//         console.log(a * b);
//     }

//     bolme(a,b){
//         console.log(a / b);
//     }
// }

// const math = new Math();
// math.topla(10,5);

// Math.topla(20,10);
// Math.cixar(15,5);


// ! varmı yoxmu? boşdurmu? (null) email control
// ! və ya date-lərdə string ilə control etmək üçün istifadə olunur
// ! StringUtul.isNull(gelendeyer) if(stringUtil)

class Insan{

    static languagesCount = 10;

    constructor(firstName,lastName,salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }

    writeInfo(){
        console.log(this.firstName, this.lastName, this.salary,
             this.languagesCount);
        
    }
}

// const insan1 = new Insan("Murad", "Aliyev", 900);
// insan1.writeInfo()

console.log(Insan.languagesCount);


class StringUtil{
    static isNull(){

    }

    static getCharLength(){

    }
}

