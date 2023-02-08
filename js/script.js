'use strict';

console.log("I am connected");

const backgroundColorF=(value)=> {
    value.style.width="5rem";
    value.style.height="5rem";
    value.style.backgroundColor = "Green"
    console.log("BackgeoundColorF true")
};

const myFunction =(el,cb)=>{
    if(el && cb){
    let myEl =document.createElement(el);
    document.body.append(myEl);
    backgroundColorF(myEl);
    console.log("MyFunction True")
    }else{
        console.log("Na")
    }
}
myFunction('div','cb');