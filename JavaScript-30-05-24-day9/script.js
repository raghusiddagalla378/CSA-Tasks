let string=document.getElementById("head3");
let str="Hello World!";
// string methods 
// slice() and substirng()
str=str.slice(6,12);
// str=str.substring(1,6);
string.textContent=str;

// toUpperCase() and toLowerCase()
let lower=document.getElementById("head2");
let case1="I am Raghu Siddagalla";
// case1=case1.toLowerCase();
case1=case1.toUpperCase();
lower.textContent=case1;

// includes()
let include=document.getElementById("para");
let sentence="The quick brown fox jumps over the lazy dog.";
sentence=sentence.includes("The");
// sentence=sentence.includes("foX");
// sentence=sentence.includes("dog",40);
// sentence=sentence.includes("Over");
include.textContent=sentence;

// startsWith() and endsWith()
let start=document.getElementById("dot");
let end="Cats are the best";
// end=end.startsWith('Cats');
// end=end.startsWith('are');
// end=end.endsWith('e');
end=end.endsWith('t');
start.textContent=end;

// concat()
let greet=document.getElementById("head4");
let str1=" hello";
// const str2="world!";
str1=str1.concat(" world!");
greet.textContent=str1;

// replace()
let result=document.getElementById("heading2");
let text="Mr Blue has a blue house and a blue car";
text=text.replace('blue','red');
// text=text.replaceAll('blue','red');
// text=text.replace('a','n');
// text=text.replaceAll('a','i');
result.textContent=text;

// indexOf() and lastIndexOf()
let s1=document.getElementById("heading3");
let s2="The code is undefined code!";

// s2=s2.indexOf('d');
s2=s2.lastIndexOf('d');
// s2=s2.lastIndexOf('code',4);
s1.textContent=s2;
// trim()
let t1=document.getElementById("heading4");
let t2="         Hello World!          ";
// t2=t2.trim();
// t2=t2.trimStart();
// t2=t2.trimEnd();
// console.log(t2.trim());
// console.log(t2.trimStart());
console.log(t2.trimEnd());

t1.textContent=t2;

// padStart() and padEnd()
let p1=document.getElementById("para2");
let p2="abc";
console.log(p2.padStart(20));
console.log(p2.padEnd(15));
p1.textContent=p2;

// Number methods

let num = 212.13456;
console.log(num.toExponential(4));

let test=103.73145;
console.log(test.toFixed(3));

let num1=99.45689;
console.log(num1.toPrecision(5));

let num2=213;
console.log("Output : " + num2.toString(2));

let num3=NaN;
console.log(num3.valueOf());
// one-way to use for loop
let string1="Raghu Siddagalla"
for(i=0;i<=string1.length;i++){
    console.log(string1[i]);
}
// second-way to use for loop
console.log("**************");
for(let int of string1){
    console.log(int)
}


// objects
let student={
    firstName:"jessy",
    lastName:"appepogu",
    age:7,
    weight:25,
    schoolName:"st.pauls EM school"
}
console.log(student);
// dot notation
let obj=student.firstName;
console.log(obj);
// barcket notation
console.log(["schoolName"]);

