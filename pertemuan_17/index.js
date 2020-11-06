// console.log("javascript class & OOP");

//class & constructor

// const person = {
//     firstName: "Regina",
//     lastName: "Mailangkay",
//     displayFullName: function(){
//         console.log (`${this.firstName} ${this.lastName}`);
//     },
// };

// person.displayFullName();

class person {
    constructor(firstName, lastName){
        this.firstName = firstName;      //-->definisikan properti dari object ini
        this.lastName = lastName;
    }
    displayFullName(){
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

// const person1 = new person  ("Mailangkay", "Regina");        //membuat object
// console.log(person1);
// person1.displayFullName();
// const person2 = new person ("jiena", "patricia");
// person2.displayFullName();


//inheritance

class student extends person{
    constructor(firstName, lastName, NIM, age){
        super(firstName,lastName);              //super ini adalah super class dan person disebut juga super class
        this.NIM = NIM;                         //super sama dengan parent
        this.age = this.age;


    }
    //static
    static sayHello(){
        console.log(`Hello World`);
    }


    displayNIM(){
        console.log(`Your NIM is ${this.NIM}`);
    }

    //setter and getter
    set studentScore(score){
        this.score = score;

    }

    get studentScore (){
        return this.score;
    }
}

const regina = new student (" Regina", "mailangkay", "03112000", 19);
regina.displayNIM();
regina.displayFullName();
student.sayHello();
regina.studentScore = 90;
console.log(regina.studentScore);