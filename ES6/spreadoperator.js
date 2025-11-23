const profile =  {
    name : "Yasaswini",
    age = 20,
    address:{ city : "Khammam" , zipcode : 501506}
};


const updates = {
    age = 21,
    address : { zipcode : 501507, country : "India"}
};

const merged = {
    ...profile,
    ...updates,

    address:{
        ...profile.address,
        ...updates.address
    }
}
comsole.log(merged)

