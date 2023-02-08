'use strict';

console.log("I am connected");


const myCounter=()=> {
    let counter = 0;
    return  value => {
        if(typeof (value) == "number")
         counter += value;
        return typeof(counter) == "number" ? console.log(`Counter is ${counter}`) :console.log("Na");
    }
}
const addValue = myCounter();

addValue();
addValue();
addValue(1);
addValue();
addValue(3);
addValue(7);
addValue(-5);
