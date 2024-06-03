
function contentColor(){
    let getId=document.getElementById("btn");
    let element=document.querySelector("h1");
    let element1=document.querySelector("body");
    let rrr=Math.floor(Math.random()*256);
    let rrr1=Math.floor(Math.random()*256);
    let rrr2=Math.floor(Math.random()*256);
    let rrr3=Math.floor(Math.random()*256);
    let ggg=Math.floor(Math.random()*256);
    let ggg1=Math.floor(Math.random()*256);
    let ggg2=Math.floor(Math.random()*256);
    let ggg3=Math.floor(Math.random()*256);
    let bbb=Math.floor(Math.random()*256);
    let bbb1=Math.floor(Math.random()*256);
    let bbb2=Math.floor(Math.random()*256);
    let bbb3=Math.floor(Math.random()*256);
    getId.style.backgroundColor=`rgb(${rrr},${ggg},${bbb})`;
    getId.style.color=`rgb(${rrr1},${ggg1},${bbb1})`;
    element.style.color=`rgb(${rrr2},${ggg2},${bbb2})`;
    element1.style.backgroundColor=`rgb(${rrr3},${ggg3},${bbb3})`;

}



let student={
    firstName:"jessy",
    lastName:"appepogu",
    age:7,
    weight:25,
    schoolName:"st.pauls EM school",
    details: {
             fName:"Balu",
             mName:"Lakshmi",
             broName:"Vikash",
             sisName:"Mahi"
    }
}
console.log(student);

// dot notation
let obj=student.firstName;
console.log(obj);

// barcket notation
console.log(["schoolName"]);

// for in loop for objects 
for (let cont in student){
    let individual=student[cont];
    console.log( cont,individual);
}

// destructuring
let {firstName,age,schoolName,}=student;
console.log(`my school name  is ${schoolName}`);

// dot notation
let fDetails=student.details.sisName;
console.log(fDetails);

// squre bracket notation
let famDetails=student['details'] ['fName'];
console.log(famDetails);

// object methods
// 1.Object.keys() 2.Object.values() 3.Object.entries()

let objKeys=Object.keys(student);
console.log(objKeys);
let objValues=Object.values(student);
console.log(objValues);
let objEntries=Object.entries(student);
console.log(objEntries);

// math functions
// minimum value
let minVal=Math.min(200,199);
console.log(minVal);
// maximum value
let maxVal=Math.min(1000,500);
console.log(maxVal);
// squreroot
let myNum=900;
let sqrt=Math.sqrt(myNum);
console.log(sqrt);
// sin values
let tri= Math.sin(30);
let tri1= Math.tan(55);
console.log(tri);
console.log(tri1);
// abs
let absVal=Math.abs(-1022);
console.log(absVal);

// round
let soap=220.16;
let finalVal=Math.round(soap);
console.log(`final price is ${finalVal}`);

// floor
let lapTop=54986.992891;
let price=Math.floor(lapTop);
console.log(`final price is ${price}`);

// ceil
let mobile=19990.99;
let mobPrice=Math.ceil(mobile);
console.log(mobPrice);

// random number(0 to 1)

let ranNum=Math.floor(Math.random()*9);
console.log(ranNum );