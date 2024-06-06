// let arrName=[10,5,29,51,88,92,49,36,7,21,8];
// function revArr(arr){
//     let emptyArray=[];
//     for(let i=arr.length-1;i>=0;i--){
//         emptyArray.push(arr[i]);
//     }
//     return revArr;
// }
// console.log(revArr(arrName));
// // console.log(empty);    



function checkElement(arr,element){
    for(let i=0;i<arr.length;i++){
        if(array[i]===element){
            return true;
        } 
    }
    return false;
}
let array=["raghu",21,"jessy",7,96,null ,true];
console.log(checkElement(array,8));


function elementFound(arr,elem){
    for(let i=0;i<=arr.length;i++){
        if(arr[i]===elem){
            return i;
        }
    }
    return -1;
}
console.log(elementFound(array,88));


function remSecElement(arr,newElement1,newElement2){
    let newArray=[];
    for(let i=0;i<arr.length;i++){
        if(i===1){
            newArray[newArray.length]=newElement1;
            newArray[newArray.length]=newElement2;
        }
        else{
            newArray[newArray.length]=arr[i];
        }
    }
    return newArray;
}
let myArray=[8,55,75,null,true,31];
console.log(remSecElement(myArray,"raghu","jessy"));



function threeElemnts(arr){
    let newArr=[];
    for(let i=0;i<=2;i++){
        newArr=arr[0];
        newArr=arr[1];
        // newArr=arr[2];
    }
    return newArr;
}
let myArray1=["divya","mahi","Abhi",null,true,31];
console.log(myArray1);
console.log(threeElemnts(myArray1))


function concatArray(arr1,arr2){
    let concat=[];
   for(let i=0;i<arr1.length;i++){
        concat[concat.length]=arr1[i];
   }
   for(let j=0;j<arr2.length;j++){
    concat[concat.length]=arr2[j];
   }
   return concat;
}
let arr1=["vikash","mahi","amar","reena"]
let arr2=[28,67,55,99,11];
console.log(concatArray(arr1,arr2));


function sortedArray(arr){
     return arr.sort()
}
const fruits = ["Banana", "Orange", "apple", "Mango","pineapple","grapes"];
console.log(sortedArray(fruits));


function doubleNumbers(arr){
    let double=[];
    for(let i=0;i<arr.length;i++){
        double.push(arr[i]*2);
    }
    return double;
}
let numArr=[28,67,55,99,11];
console.log(doubleNumbers(numArr));



function evenNumbers(arr){
    let even=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2===0){
            even[even.length]=arr[i];
            
        }
    }
    return even;
    
}
let numbers=[45,73,83,89,88,12,10,70,32,77,66,92];
console.log(evenNumbers(numbers));


function arithmeticOperations(arr){
    let sum=[];
    let mul=[];
    for(let i=0;i<arr.length;i++){
        return sum=arr[i]*1;
    }
}
let arrOfNumbers=[1,2,3,4,5,6,7,8,9];
console.log(arithmeticOperations(arrOfNumbers));
























