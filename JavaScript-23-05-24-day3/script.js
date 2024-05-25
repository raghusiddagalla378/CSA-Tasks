// arithmetic operators
let num1=200;
let num2=100;
let num3=10;
let addition=num1+num2;
let subStraction=num1-num2;
let mulTiplication=num1*num2;
let division=num1/num2;
let modDivision=num1%num2;
let exponentiation1=num1**1;
let exponentiation2=num2**2;
console.log(addition);//addition operation
console.log(subStraction);//substraction operation
console.log(mulTiplication);//multiplication operation
console.log(division);//division operation
console.log(modDivision);//modular division operation
console.log(exponentiation1);// exponentiation operation
console.log(exponentiation2);

//type coercion
// implicit coercion
let number1="100";
let number2="20";
let numberConc=number1 + number2;
let numberConc1=number1 + +number2;
let numberSub=number1 - number2;
let numberMul=number1 * number2;
let numberDiv=number1 / number2;
console.log(numberConc,typeof numberConc);
console.log(numberConc1,typeof numberConc1);
console.log(numberSub, typeof numberSub);
console.log(numberMul, typeof numberMul);
console.log(numberDiv, typeof numberDiv);
//number to string
let a=7;
let b="MSDhoni";
let c=b+a;
let d=true + b;
let f=false +7;
let g=true +10;
console.log(c);
console.log(typeof c);
console.log(d);
console.log(f);
console.log(g);

// string to number
let x=20;
let y="5";
let z=x+Number("5");
console.log(z);
console.log(typeof z);

let e= y **2;
console.log(e);
// objects
const person={
    name:"raghu",
    age:23,
    height:5.8,
    graduation:"B.Tech",
    grade:7.1,
}
console.log(person,typeof person);
// Arrays
let fruits=["apple","banana","grapes","mango","pine-apple"]; 
console.log(fruits);
console.log(fruits[3]);

// BADMAS rule (Brackets,Order, Division,Multiplication,Addition,Substraction)
let badmas=(num2+num3)-num3*(num1/num2)+num3;
console.log(badmas);
