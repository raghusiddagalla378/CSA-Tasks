// promise

const count=true;
let countValue=new Promise(function(resolve,reject){
    if(count){
        resolve("There is a count value")
    }
    else{
        reject("there is no count value")
    }
})
console.log(countValue);


// async and await
let promise=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve("promise resolved")
    },4000);
})
// async function asynFun(){
//     let result= await promise;
//     console.log(result);
//     console.log("hello");
// }

// Error handling
async function asynFun(){
    try{
        let result= await promise;
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
}
asynFun();



// JSON(JavaScript Object Notation)
// json methods are stringify and parse


let person = {
        name : "jessy",
        age : 6,
        schoolname : 'st.pauls EM school',
        rollno: 11,
        gender: "female"
    }
    
    console.log(person);
    
    const convertToJson =  JSON.stringify(person);
    console.log(convertToJson);
    const string = convertToJson.length;
    console.log(string)
    const convertBakToObj = JSON.parse(convertToJson)
    console.log(convertBakToObj);
    
     
    const getDataFromDb = async () => { // get operation
        try {
            const result = await fetch("https://fakestoreapi.com/products");
    
    
            const response = await result.json();
    
            console.log(response)
    
        } catch (error) {
                console.log(error)
        }
    }
    
    // end point;
    
    getDataFromDb();



    // DOM manipulations
    let int=document.getElementById("head");
    let button=document.getElementById("btn");
    // let content = javscriptHeading.textContent;
// let otherWay = javscriptHeading.innerHTML;


button.addEventListener('dblclick', (event) => {
    int.textContent = "JavaScript Object Notation";
    int.style.backgroundColor="red";
    
});
    