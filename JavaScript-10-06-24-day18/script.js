const getProductsBtn = document.querySelector("#get-products-btn");

const productContainer = document.querySelector(".products-container");

// const API = "https://fakestoreapi.com/products";
const API="https://makeup-api.herokuapp.com./api/v1/products.json";
// way 1

// let dataFUnction = async () => {
//     try {

//         alert("Hello")

//     } catch(error){
//         console.log(error)
//     }
// }
// getProductsBtn.addEventListener('click', dataFUnction);

// way 2;

getProductsBtn.addEventListener("click", async () => {
  try {
    const dbData = await fetch(API);
    const result = await dbData.json();

    result.forEach((product) => {
      // destructuing
      let { category, description, image, price, rating, title } = product;

      let html = `
        <div class="text-center bg-warning text-white rounded p-3" >
            <h4>Name: ${title} </h4>
            <hr />
            <div class="d-flex justify-content-around" >
                <strong>Category: ${category}</strong>
                <strong> &#8377; ${price}</strong>
                <strong>Rating:  ${rating.rate}</strong>
            </div>
            <hr />
            <img class="product-image m-2" src=${image} alt="product-image" />
            <p class="mt-3" > <span class="text-danger" >About: </span> ${description} </p>
            <button class="btn btn-primary" >View product</button>
        </div> 
    `;

      productContainer.innerHTML += html;
    });
  } catch (error) {
    console.log(error);
  }
});