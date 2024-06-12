
// promises
const count = true;

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There is a count value.");
    } else {
        reject("There is no count value");
    }
});

console.log(countValue);



// Chaining the Promise with then()
let countValue1 = new Promise(function (resolve, reject) {
    resolve("Promise resolved");
  });
  
  // executes when promise is resolved successfully
  
  countValue1
    .then(function successValue(result) {
      console.log(result);
    })
  
    .then(function successValue1() {
      console.log("You can call multiple functions this way.");
    });


    // JavaScript catch() method
    // returns a promise
let countValue2 = new Promise(function (resolve, reject) {
    reject('Promise rejected'); 
 });
 
 // executes when promise is resolved successfully
 countValue2.then(
     function successValue(result) {
         console.log(result);
     },
  )
 
 // executes if there is an error
 .catch(
     function errorValue(result) {
         console.log(result);
     }
 );




//  callback hell
let  a=10;
let b=10;
function add(addition){
    setTimeout(() =>{
        console.log(a+b);
        addition();
    },5000);
}
function sub(subtraction){
    setTimeout(() =>{
        console.log(a-b);
        subtraction();
    },4000);
}
function mul(multiply){
    setTimeout(() =>{
        console.log(a*b);
        multiply();
    },3000);
}
function div(division){
    setTimeout(() =>{
        console.log(a/b);
        division();
    },2000);
}
function moddiv(modularDivision){
    setTimeout(() =>{
        console.log(a%b);
        modularDivision();
    },1000);
}
add(() =>{
    sub(() =>{
        mul(() =>{
            div(() =>{
                moddiv(() => console.log("arithmetic operations are executed"));
            });
        });
    });
});