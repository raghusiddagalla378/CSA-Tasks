// function declaration
function person(){
    let i=20/5;
    const weeks=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturady","Sunday"];
    console.log("my name is raghu siddagalla");
    console.log(i);
    for(i=0;i<=weeks.length;i++){
        console.log(weeks[i]);
    }
}
console.log("raghu");
person();
console.log("jessy")

// function expresssion
let square = function(num) {
    let months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    let i=0;
    while(i<=12){
        console.log(months[i]);
        i++;
    }
    return num * num;
};

console.log(square(5));

// arrow function
let arrow=(a,b) =>{
    let sum=a+b;
    return console.log(sum);
}
arrow(10,20);
// DOM(document object model)
// events 

let myhead1=document.getElementById("head1");
function changeName(){
    console.log("raghu")
    myhead1.textContent="Mouse Event";
    myhead1.style.color="orange";
}