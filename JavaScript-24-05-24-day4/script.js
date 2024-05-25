// assignment operator (=,+=,-=,*=,/=,%=,**=)
// 
let number=20;
let number1=20;
let sum=number+number1;
console.log(sum);
number1=100; //re=assinging the value
console.log(10*number1);
number=50;
console.log(100-number);
// self-assigning(compound operators)
let integer=200;
// integer=integer*5; //one way 
// integer +=100; //second-way 
integer -=100;
// integer *=2;
// integer /=10;
// integer **=2;
console.log(integer);

// comparision operators(=,!=,>,<,>=,<=,===,!==)
let num1=100;
let num2=50;
let str1="50";
let str2="80";
let lessThan=num1<num2;
console.log(lessThan);
const n1=30;
const n2=20;
let greaterThan=n1>n2;
let string=num2>str1;
console.log(greaterThan);
console.log(string);
let lesstThanOrEqualsto = num1<=num2;
let lesstThanOrEqualsto1= num2<=str1;
console.log(lessThan);

let equalsTo = num1==num2;
let equalsTo1 = num2==str1;
console.log(equalsTo);
console.log(equalsTo1);

let NotEqualsTo = num1!==num2;
console.log(NotEqualsTo);

// strict comparision

let strictComp = num1===num2;
console.log(strictComp);

// Logical Operators(&&,||,!)
let a=4;
let b=5;
let c=false;
console.log(a && b);
console.log(b||c);
console.log(!a);
// if statement
const userName="brendan Eich";
const userAge=23;
if(userAge>=18 && userAge<=23){
    console.log("hi , my name is brendan Eich");
    console.log("I am a computer scientist and a programmer at Netscape communication corporation.");
}
// else
// console.log("else block is executed")
if(userAge>=18 || userAge<=22){
    console.log("if block is executed");
}
else
console.log("else block is executed");

const grade=34;

if(grade>=75){
    console.log("your grade is A")
}
else if(grade>=60){
    console.log("your grade is B");
}
else if(grade >=45){
    console.log("your grade is C");
}
else if(grade >=35){
    console.log("your grade is D");
}
else {
    console.log("your grade is F")
}

