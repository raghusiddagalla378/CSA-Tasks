let button=document.getElementById("get-btn");

let productContainer=document.querySelector(".products-container");

const API=" https://makeup-api.herokuapp.com/api/v1/products.json";

button.addEventListener('click', async () =>{
    try{
        const databaseData=await fetch(API);
        const result=await databaseData.json();
        let productkey=result;
        console.log(productkey);
        for(let i=0;i<=20;i++){
            let {api_featured_image, name,price,price_sign,product_type,rating}=productkey[i];
            let html=
        `
        <div class="product1">
           <div>
               <img class="product-image" src=${api_featured_image} alt="image-link" />
           </div>
           <div class="product-name">
              <h2>${name} </h2>
              <h4>${price_sign} ${price}</h4>
           </div>
           <p>${product_type}</p>
           <h5> rating:4.2</h5>
           <button class="add">Add to Cart</button>
        </div>
        `
        productContainer.innerHTML +=html;

        }
        
    }
    catch(error){
        console.log(error);

    }
});