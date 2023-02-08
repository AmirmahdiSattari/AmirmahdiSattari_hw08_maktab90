'use strict';

console.log("I am connected")

//obj
const personData = {
    firstName :"",
    addName(value){this.firstName = value}
}

//function for Adding value to person(addName) key
const AddData= (value)=>personData.addName(value);


//assigning value
AddData("Amirmahdi");

console.log(personData.firstName);