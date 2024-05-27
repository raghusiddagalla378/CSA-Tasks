// 1.given number is odd or even
// const number=prompt("enter a number");
// if(number%2 == 0){
//     console.log("The given number is even");
// }
// else{
//     console.log("The given number is odd");
// }

// 2.The given number is positive or negative or zero

// const number1=prompt("enter a number:");
// if(number1>0){
//     console.log("The given number is positive");
// }
// else if (number1 ==0){
//     console.log("The given number is zero");
// }
// else{
//     console.log("The given number is negative");
// }


// 3.The given number is of one digited or two digited or three digited or more than three digited.

// let num=prompt("Enter a number:");
// if(num>=0 && num<=9){
//     console.log("the given number is one digited")
// }
// else if(num>=10 && num<=99){
//     console.log("the given number is two digited")
// }else if(num>=100 && num<=999){
//     console.log("the given number is three digited")
// }
// else{
//     console.log("the given number is more than three digited")
// }
// 4. The entered number is smallest 4 digit number or not .



// 5. The given character is an uppercase letter or lowercase letter or a digit or a special character

let char = prompt('Enter a character')
if(char>="A" && char<="Z"){
    console.log("the given character is an uppercase character");
}
else if(char>="a" && char<="z"){
    console.log(" the given character is an lowercase character");
}
else if(char>=0 && char<=9){
    console.log("the given character is a digit");
}
else if(char=="$" && char=="@" && char=="_"){
    console.log("the given character is an special  character");
}
else {
    console.log("the given input is not valid");
}
// 6.The given year is leap year or not
// const year=prompt("enter a year");
// if(year%400==0 && year%100 !=0 || year%4==0 ){
//     console.log("the given year is a leap year")
// }
// else{
//     console.log("the given year is not a leap year")
// }

// 7.The given number is divisible by 5 or not

// let num1=prompt("Enter a number")
// if(num1%5==0){
//     console.log("the given number is divisible by 5")
// }
// else{
//     console.log("the given number is not divisible by 5")
// }
// 8.Find maximum number out of given three numbers 

// const number1=prompt("Enter a first number:");
// const number2=prompt("Enter a second number:");
// const number3=prompt("Enter a third number:");
// let maxNumber;
// if(number1>=number2 && number1>=number3){
//     maxNumber=number1;
// }
// else if(number2>=number1 && number2>=number3){
//     maxNumber=number2;
// }
// else
// {
//     maxNumber=number3;
// }
// console.log("The maximum number is " + maxNumber)
// 9. Find manimum number out of given three numbers
// const num1=prompt("Enter a first number:");
// const num2=prompt("Enter a second number:");
// const num3=prompt("Enter a third number:");
// let minNumber;
// if(num1<=num2 && num1<=num3){
//     minNumber=num1;
// }
// else if(num2<=num1 && num2<=num3){
//     minNumber=num2;
// }
// else
// {
//     minNumber=num3;
// }
// console.log("The minimum number is " + minNumber)
// 10.Write a program that reads three positive numbers a,b,c and determines whether they can form the three sides of a triangle.

// const a=prompt("Enter a first number:");
// const b=prompt("Enter a second number:");
// const c=prompt("Enter a third number:");
// let triangle;
// if(a+b>c){

// }
// else if(a+c>b){

// }
// else if(b+c>a){

// }