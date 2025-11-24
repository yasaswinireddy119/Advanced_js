
//Template literals + Expressions
let a = 5
let b = 7
let sum = a + b
console.log(`${a} + ${b} = ${sum}`)

let firstName = "John";
let lastName = "Doe";
console.log(`${firstName} ${lastName}`)

//2.Arrow functions & this
const square (n) => {n * n};
console.log(square)

//undefined
//because the test() was empty

function obj(){
    const value = 50,
    function test() {
        console.log(value)
    }
}
console.log(obj.test())

//3.Rest, Spread & Copying Objects
const product = { name: "Pen", price: 10 };
product = {
...name , ...price
}
console.log(product)

const a = { x: 1 };
const b = { y: 2 };
const merged = {...x , ...y}
console.log(merged)

function maxValue(...nums){

}

//4.Destructuring and optional chaining
const arr=[10,20,30]
const values=[a,b,c]
console.log(a)
console.log(b)
//log  brand by destructuring
const laptop={brand : "Dell" , ram:"8GB"}
const laptop ={
    brand,
    
}
console.log("brand")
//optional chaining should print undefined
const info={}
console.log(info?.)

//scoping
for (var i = 0; i < 3; i++) {}
console.log(i);
//it prints 3

for (let j = 0; j < 3; j++) {}
console.log(j);
//it prints undefined beacuse let was declared for only local

//const means we cannot re-asign it beacuse it was fixed and constant

//ternary
//convert to ternary
let speed;
if (kmph > 60) {
  speed = "Fast";
} else {
  speed = "Normal";
}

console.log(if kmph>60? "Fast" : "Normal")
console.log(if (age >= 18)? "Adult" : "Minor")

//nested ternary
let num = 5;

let result = num > 0 
    ? "Positive" 
    : num === 0 
        ? "Zero" 
        : "Negative";

console.log(result);


//7.spread ,rest , arrays

const nums = [1,2,3]
const new =[...nums ,4,5]
console.log(new)

//arrays
a= ['x','y']
b=['z']
const combined = [...a , ...b]
console.log(combined)

//using rest
function printNames(...names){
    return names
}
console.log(printNames("A","B","C"))


//destructuring
const user = { id: 101, status: "active" };

const { id, status } = user;

console.log(id);      
console.log(status);  


//Convert this to shorthand
const id = 101;
const role = "admin";

const user = {
  id,
  role
}

console.log(user);

//Create an object using shorthand & add a method using shorthand syntax
const name = "Yasaswini";
const age = 20;

const student = {
  name,
  age,
  
  // shorthand method
  greet() {
    return `Hello, I am ${this.name}`;
  }
};

console.log(student.greet()); 


//Print today’s date
const today = `Today's date is: ${new Date().toDateString()}`;
console.log(today);

// "Hello NAME, your score is SCORE/100"
const name = "Yasaswini";
const score = 95;

const msg = `Hello ${name}, your score is ${score}/100`;
console.log(msg);
//arrow func
const add = (a, b) => a + b;
const isAdult = age => age >= 18;
const double = n => n * 2;


//11.spread operator
//Clone an array
const arr = [1, 2, 3];
const clone = [...arr];
console.log(clone);


//Add element 100 to the beginning
const arr2 = [1, 2, 3];
const updated = [100, ...arr2];
console.log(updated);

//Merge two objects & override a property
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 99, c: 3 };

const merged = { ...obj1, ...obj2 };
console.log(merged); 

//Optional Chaining (More Practice)
//a) Access user.address.city safely
const user = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};

console.log(user?.address?.city); // "Bangalore"

console.log(user?.job?.title);

const product = {
  name: "Laptop"
  
}
console.log(product?.specs?.ram); 


