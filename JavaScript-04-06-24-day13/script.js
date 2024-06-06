// higher order functions
// function as argument
function fun(arr,value){
    let res=[];
    for(let i=0;i<arr.length;i++){
        res[i]=value(arr[i],i,arr)
    }
    return res;
}
const num = [45,28,19,60,81,39,20];
const doubled = fun(num,function(n){
    return n*2;
});
console.log(doubled);

// function that return another functions

function add(num){
        return function(value){
            return value * num;
        };
}
let single=add(1);
console.log(single(5));

// array methods
const number = [1, 2, 3, 4, 5];
const doubled1 = number.map(num => num * 2);
console.log(doubled1);

const number1 = [67,33,76,14,21,98,10,15,72];
const evens = number1.filter(num => num % 2 === 0);
console.log(evens);

const numbers = [18,31,45,7,8,77,33,1,69];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum);