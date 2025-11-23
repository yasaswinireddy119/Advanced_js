//arrow function
const isEven=(n)=>{
    if(n%2==0){
        return true
    }
    else{
        return false
    }
}
console.log(isEven(9))//return false

//Ternary operator

let marks= 40;
console.log(marks >= 35 ? "Pass" : "Fail")

//arrowfun
const greet = name => 
console.log(`Hello , ${name ? name : "Guest"} `)