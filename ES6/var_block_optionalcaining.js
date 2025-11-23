if(true){
    let x =10;
    var y =20
}
console.log(x)
console.log(y)

//Output will be : 20
//It doesn't return the valur of x becaue we used the let keyword which does not result globally it only reults inside because we declared it inside


//optional chaining
const profile = {
    user : {
        details : {
            email : "test@mail.com"
        }
    }
}


console.log(?profile?.user?.details?.email)
console.log(?profile?.user?.details?.phone)


//runtime

const student = {
    name : "Yashu";
    age:{

    
    marks:{
    totalmarks:80/100
    }
}
}
console.log(student?.name?.age?.marks?.totalmarks)
