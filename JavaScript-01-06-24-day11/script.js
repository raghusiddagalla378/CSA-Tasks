let arr=[];
arr.push("a");
arr.push("e")
arr.push("i")
arr.push("o")
arr.push("u")
console.log(arr)
console.log("************************")

let sepArr=[-1,78,344,-546,44,-29,13,-77,0,-9,-7,31];
console.log(sepArr);
let positiveNum=[];
let negativeNum=[];
for(let numbers of sepArr ){
    if(numbers>=0){
        positiveNum.push(numbers);
    }
    else
    negativeNum.push(numbers);
}
console.log(positiveNum);
console.log(negativeNum);
console.log("**************************");


let natNum=[9,24,199,98,72,3,8,45,88,102,141,1,10,7,91,99,96]
let evenNum=[];
let oddNum=[];
for(let natural of natNum){
    if(natural%2==0){
        evenNum.push(natural);
    }
    else
    oddNum.push(natural);
}
console.log(evenNum);
console.log(oddNum);
console.log("**************************");
console.log(natNum.length);

console.log(natNum[2]);
console.log(natNum[9]);
console.log(natNum[5]);
console.log(natNum[0]);
console.log(natNum[7]);


