// Chapter 1
console.log("Azfar Bilal");
/* Multiple Line
    Comment */


// Chapter 2 Miles to KM converter
function convert() {
    var calc = document.getElementById("howmuch").value;
    var mult = calc * 1.60934;
    document.getElementById("show").innerHTML = "The distance of " + calc +  " is equal to " + mult + " miles";
}

// Chapter 2 BMI Calculator

var heightInches = 45;
var weightPounds = 200;
var heightCentimeters = heightInches * 2.54;
var weightKilos = weightPounds/2.2046;
console.log(heightCentimeters + ", " + weightKilos);

var BMI = weightKilos / heightCentimeters / heightCentimeters * 10000;
console.log(BMI);

// Chapter 3
// Manipulating an Array

// const theList = ['Laurence', 'Svekis', true, 35, null, undefined];

// var theListing = theList.shift();

// console.log(theListing);

// Chapter 3 Company product catalog

var companyCatalog = [{
    name: "Bag",
    model: "Nike",
    cost: 2300,
    quantity: 450
}, {
    name: "shoes",
    model: "Adidas",
    cost: 9500,
    quantity: 300
}, {
    name: "shirt",
    model: "Puma",
    cost : 10500,
    quantity: 200
}]

console.log (companyCatalog);

// Chapter 4 Evaluating a number game

function numFunc() {
    var num = 33;
    var ting = document.getElementById("number").value;
    
    if (ting>num) {
        document.getElementById("value").innerHTML = "Your number is larger than ours";
    } else if (ting === num) {
        document.getElementById("value").innerHTML = "Our numbers are equal!";
    } else {
        document.getElementById("value").innerHTML = "Your number is less than ours";
    }
} // <-- !!!!! why does else if not work?

// Chapter 4 Friend checker game

function check() {
    var dost = document.getElementById("dost").value;
    var friend = "Michael";
    switch(dost) {
        case dost === friend:
            document.getElementById("is").innerHTML = "They're a friend!";
        break;
        case dost !== friend:
            document.getElementById("is").innerHTML = "They're not a friend!";
            break;
        default:
            document.getElementById("is").innerHTML = "Who are they?";
    }    
} // <--- !!!!!! only default statement working

// Chapter Rock Paper Scissors game
function rps() {
    var rps = document.getElementById("rps").value;
    var numb = Math.ceil(Math.random()*3);
    var rock = 0;
    var paper = 1;
    var scissor = 2;
    switch(rps) {
        case "rock":
        player = 1;

    }
}

// Chapter 5 Multiplication Table
var five = 5;
parseInt(five);

function fun() {
    for (var i = 0; i<10; i++) {
        console.log (i*five);
    }
}

// Chapter 6 Recursive Function
function recursive() {
    var run = 10;
    var running = 0;
    while (running <= 10) {
        running++;
        console.log(running);
        document.getElementById("showingTheValue").innerHTML = running;
    }
}

// Chapter 6 setTimeOut() --> WRONG!!!!!
var one = () => {
    console.log("one");
}

var two = () => {
    console.log("two");
}

var three = () => {
    console.log("three");
    one();
    two();
}

var four = () => {
    console.log("four");
    three();
    setTimeout(one(), 1000);
    setTimeout(three(), 2000);
}

four();

// Chapter 7 Employee Tracking App
// class EmployeeTracking {
//     constructor(firstName, lastName, numberOfYearsWorked) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.numberOfYearsWorked = numberOfYearsWorked;
//     }
//     returnFirst() {
//         return this.firstName;
//     }
//     returnLast() {
//         return this.lastName;
//     }
//     returnNumber(){
//         return this.numberOfYearsWorked;
//     }
// }

// let EmployeeTracking1 = new EmployeeTracking("Liam", "Wilshaw", 2);
// let EmployeeTracking2 = new EmployeeTracking("Tiana", "Ware", 4);
// let employeeArray = [EmployeeTracking1, EmployeeTracking2];
// console.log(EmployeeTracking1.returnFirst());
// console.log(EmployeeTracking1.returnLast());
// console.log(EmployeeTracking1.returnNumber());
// console.log(EmployeeTracking2.returnFirst());
// console.log(EmployeeTracking2.returnLast());
// console.log(EmployeeTracking2.returnNumber());

// // first names, last names, and the number of years

// // Chapter 7 Menu Items Calculator


// class Menu {
//     constructor (beef, chicken, soup) {
//         this.beef = 20;
//         this.chicken = 60;
//         this.soup = 10;
//     }

//     total() {
//        return this.beef*2 + this.chicken*3 + this.soup*4;
//     }
// }

// let order = new Menu(this.beef*2, this.chicken*3, this.soup*5);
// console.log(order);


// Chapter 7 constructor practice

// class Person {
//     constructor (name, birthYear, age) {
//         this.name = name;
//         this.birthYear = birthYear;
//         this.age = age;
//     }
//     calcAge() {
//         console.log(new Data().getFullYear() - this.birthYear);
//     }
// }

// let john = new Person('John', 1990, "Male");
// console.log(john);

// class Person {
//     constructor (firstName, lastName, age) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//         console.log("Person constructor being invoked");
//     }
//     getFullName (){
//         return this.firstName + " " + this.lastName
//     }
//     static getID() {
//         return 1;
//     }
// }
// let perso = new Person("O", "b", 23)
// console.log(Person.getID());

// class Teacher extends Person{
//     constructor(firstName, lastName, age, job) {
//         super(firstName, lastName, age);
//         this.job = job;
//         this._salary = 10;
//     }
//     get salary() {
//         return this._salary;
//     }
//     set salary(salary){
//         this._salary = salary;
//     }
// }
// let person = new Person("Pedro", "Mecado", 10);
// console.log(person.getFullName());
// console.log(Person.prototype.getFullName);
// console.log(Person.getID());
// let teacher = new Teacher("Bob", "Billy", 11, "Math Teacher");
// console.log(teacher.salary);
// teacher.salary = 15;
// console.log(teacher.salary);

// Chapter 7 Employee Tracking

class Worked {
    constructor(first, last, years) {
        this.first = first;
        this.last = last;
        this.years = years;
    }
}

var one = new Worked("John", "Wrinch", 34);
var second = new Worked("Gladys", "Salter", 24);

Worked.prototype.set = function() {
    console.log("Greetings! I am " + this.first + " " + this.last + ". " + "I have worked in this company for " + this.years + " years");
} // How do I enter them in an array, access the array and output items accordingly? !!!!!

Worked.prototype.let = function() {
    console.log("Greetings! I am " + this.first + " " + this.last + ". " + "I have worked in this company for " + this.years + " years");
} 

one.set();
second.let();

// Chapter 7 Menu Items 

class Menu {
    constructor(beef, chicken, soup) {
        this.beef = 10;
        this.chicken = 12;
        this.soup = 3;
    }
    howMuch(){
        console.log(this.beef*3 + this.chicken*2 + this.soup*4);
    }
}

let newie = new Menu(2, 3, 4);

newie.howMuch();

// Chapter 8 Word Scramble

const run = () => {
    let word = "fascinating";
    let wordA = word.split("");
    for (let i=wordA.length-1; i > 0; i--) {
        let k = Math.floor(Math.random() * (i+3));
        document.getElementById("sow").innerHTML = k;
    }
}

// Chapter 8 Countdown Timer

const d = new Date(Date.now());
console.log(Date.parse(d));
console.log(d.getTime())



