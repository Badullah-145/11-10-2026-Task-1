// Part 1: Primitive Data Types

var studentName = "Badullah H S";
console.log(typeof(studentName)); //1

var employeeAge = 25;
console.log(typeof(employeeAge)); //2

let isWorking = true;
console.log(typeof(isWorking)); //3

let decl;
console.log(decl); //4

//5

var var1 = "String";
var var2 = 21;
var var3 = false;
var var4;
var var5 = prompt();

//6

console.log(typeof(var1));
console.log(typeof(var2));
console.log(typeof(var3));
console.log(typeof(var4));
console.log(typeof(var5));

const courseName  = "JavaScript";
console.log(courseName); //7

var batchNumber  = 42; 
console.log(typeof(batchNumber)); //8


// Part 2: Arrays

let fruits = ["Pine Apple", "Strawberry", "Kiwi", "Mango", "fig"]; //9

console.log(fruits[0]); // First Element question - 10
console.log(fruits[2]); // Third Element question - 11
console.log(fruits[fruits.length-1]) // Last element using length. question - 12

let MyDetails = ["Badullah", 25, "Bangalore", "Frontend Developer"]; // 13

//14

console.log(MyDetails[0])
console.log(MyDetails[1])
console.log(MyDetails[2])
console.log(MyDetails[3])

let ExArray = ["One", "Two", 2, 3, true]; // 15

//16
console.log(ExArray[ExArray.length-5]) // Index - 0
console.log(ExArray[ExArray.length-4]) // Index - 1
console.log(ExArray[ExArray.length-3]) // Index - 2
console.log(ExArray[ExArray.length-2]) // Index - 3
console.log(ExArray[ExArray.length-1]) // Index - 4

//17

let MobileBrand = ["Apple", "Samsung", "Huawei", "Sony", "Oppo"];
console.log(MobileBrand[1]);

//18

let ProgrammingLanguages = ["Python", "JavaScript", "Java", "C++", "C#", "TypeScript"];
console.log(ProgrammingLanguages[5]);

//Part 3: Objects

let student  = {
    name: "Badullah",
    age: 25,
    city : "Benagaluru"
}; // 19

console.log(student.name); //20
console.log(student.age); //21

let employee = {
    name          : "Badullah",
    salary        : 15000,
    Designation : "Frontend Developer"
} //22

let employeeDetails = {

    Skills : ["Python", "JavaScript", "Java", "C++", "C#", "TypeScript"]
} //23

console.log(employeeDetails.Skills[2]); // The third skill. Question 23

let allDetails = {
    fruit : ["Pine Apple", "Strawberry", "Kiwi", "Mango", "fig"],
    NumOfFruits: 5,
    AreAllFruits : true,
    toy : "RC Car"
}; //24
console.log(allDetails.toy); //25

let company  = {
    CompanyName : "Stackly",
    Location : "Bengaluru",
    EmployeeCount : 456
}; //26

//Part 4: Arithmetic Operators

console.log("Addition Value :" ,1+1) //27
console.log("Substraction Value : ", 4-3); //28
console.log("Multiplcation Value : ", 2*2*8); //29
console.log("Division value: ", 100/5); //30
console.log("Remainder Value: ", 25%4); //31
console.log("Exponential Value of 3^4 : ", 3**4); //32

let value1 = 10; //33
let value2 = 2; //33

console.log("Addition Value :" ,value1+value2) //33
console.log("Substraction Value : ", value1-value2); //33
console.log("Division value: ", value1/value2); //33
console.log("Remainder Value: ", value1%value2); //33
console.log("Exponential Value of 10^2 : ", value1**value2); //33
console.log("Multiplication Value : ", value1*value2); //33

//Part 5: Increment and Decrement

let xi = 10;
let xii = ++xi; 
console.log(xii) //34

let yi = 20;
let yii = yi++; 
console.log(yii)  //35

let zi = 30;
let zii = --zi; 
console.log(zii)  //36

let wi = 40;
let wii = wi--; 
console.log(wii)  //37

//38 

let a = 10;
let b = a++;
console.log(a); // Output 11
console.log(b); // output 10

//39

let x = 15;
let y = ++x;
console.log(x); // Output 16
console.log(y); // Output 16

//40

let num1 = 25;
let num2 = --num1;
let num3 = num2++; //num2
let num4 = ++num3;

console.log(num1); // Output 24
console.log(num2); // Output 25
console.log(num3); // Output 25
console.log(num4); // Output 25




