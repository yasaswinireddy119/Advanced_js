const arr1 = [1,2,3];
const arr2 = [4 ,5]
const merged =[ ...arr1,
    ...arr2]
console.log(merged)

//sum(...num)

function sum(...nums){
    return num.reduce((total,n) => total + n , 0);
}
console.log(sum(10,20,30))

//destructuring

const user = {
    name : "Alice",
    age : 22,
    address : {
        city : "Bangalore",
        pin : 560001
    }
}

const { name ,
    address : { city , pin}
} = user
console.log(name)