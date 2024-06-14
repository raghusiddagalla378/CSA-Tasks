
let info=document.querySelector(".container")
const API="https://jsonplaceholder.typicode.com/users";

fetch(API).then(function(res){
     return res.json();
  }).then(function(result){
    console.log(result)
    result.forEach( user=> {
          let {name,username,phone,email,address,company}=user;
          let {city,street,suite,zipcode}=address;
          let {name:name1,bs,catchPhrase}=company;
          info.innerHTML +=`
          <div class="details">
              <div class="info" >
                  <h3><strong>Name: </strong>${name}</h3><br>
                  <h4><strong>UserName: </strong>${username}</h4><br>
                  <p>
                  <strong>Email: </strong>${email} <br><br>

                  <strong>Phone:  </strong>${phone} <br><br>
                  <strong>Company:  </strong>${name1},${bs},${catchPhrase}<br><br>
                  <strong>Address:  </strong>${street}, ${city},${suite},${zipcode}
                  </p>
              </div>
          </div>
          `
    })
    }).catch((error)=>{
        console.log(error)
      })

























