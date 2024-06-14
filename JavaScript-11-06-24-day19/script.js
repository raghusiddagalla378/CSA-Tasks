let button=document.getElementById("get-btn");
let products=document.querySelector(".product-container");

const API=" https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Vegan&product_type=nail_polish";

button.addEventListener('click', async ()=>{
    try{
        const data=await fetch(API);
        const result=await data.json();
        let prodctItems=result;
        console.log(prodctItems);
        for(let i=0;i<=8;i++){
            let{image_link,brand,name,price,rating,product_colors,}=prodctItems[i];
            let html=
        `
        <div class="product-details">
            <div id="container">
               <img  class="images" src=${image_link}  alt="image" /> 
               <h4>${brand}</h4><br>
               <p>${name}</p><br>
               <p class="para"> $ ${price}</p>
               <p class="para" >${rating}</p>
            </div>
        </div>
        `
        products.innerHTML +=html;
        }
    }
    catch(e){
        console.log(e);
    }
});