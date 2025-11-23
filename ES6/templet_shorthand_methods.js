//Using templet literals

const username = "yasaswinireddy11"
const course  = "Advancedjs"

console.log(`Hello ${username} , welcome to the ${course}`)

//shorthand syntax
//before shrot hand syntax 
        //const name = "Sam";
        //const age = 21;
        //const student = {
        //name: name,
        ///age: age,
        // greet: function () {
        //     console.log("Hello");
        //  }
        //  };After the shorthand

const name = "sam";
const age = 21
const student = {
    name,
    age,
    greet(){
        console.log("Helli")
    }
}

//arrow function without return

const getFullName = (first , last) => `${first}  ${last}`
console.log(getFullName("upendar" , "reddy"))