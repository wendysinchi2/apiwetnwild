let searchButton = document.querySelector("#search")

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  sendApiRequest()
})


//An asynchronous function to fetch data from the API.
async function sendApiRequest(){
  let response = await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick`);
  console.log(response)
  let data = await response.json()
  console.log(data)
  useApiData(data)
}


//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data){  
  document.querySelector("#content").innerHTML += `
<div class="card col-3 offset-1" style="width: 18rem;">
  <img src="${data[0].image_link}" class="card-img-top" alt="...">
  <div class="card-body">
 <h5 class="card-title">${data[0].name}</h5>
  <p class="card-text">${data[0].description}</p>
 <p class="card-text">${data[0].price}</p>
    <a href="${data[0].website_link}" class="btn btn-primary">Buy The lipstick Here!</a>
 </div>
</div>
`
  document.querySelector("#content").innerHTML += `
<div class="card col-3 offset-1" style="width: 18rem;">
  <img src="${data[1].image_link}" class="card-img-top" alt="...">
  <div class="card-body">
 <h5 class="card-title">${data[1].name}</h5>
  <p class="card-text">${data[0].description}</p>
 <p class="card-text">${data[1].price}</p>
    <a href="${data[1].website_link}" class="btn btn-primary">Buy The lipstick Here!</a>
 </div>
</div>
`

    document.querySelector("#content").innerHTML += `
<div class="card col-3 offset-1" style="">
  <img src="${data[2].image_link}" class="card-img-top" alt="...">
  <div class="card-body">
 <h5 class="card-title">${data[2].name}</h5>
  <p class="card-text">${data[0].description}</p>
 <p class="card-text">${data[2].price}</p>
    <a href="${data[2].website_link}" class="btn btn-primary">Buy The lipstick Here!</a>
 </div>
</div>
`





document.querySelector("#content").innerHTML += `
<div class="jumbotron">
<div class="container">
 <h1 class="display-4">Looking For A Duo ?</h1>
  <img src="${data[3].image_link}"</h1>
  <p class="lead">${data[3].name}</p>
  <hr class="my-4">
  <p>${data[3].description}</p>
<p >${data[3].price}</p>
  <a class="btn" href="${data[3].website_link}" role="button"> Buy It Now Here!</a>
  </div>
</div>



`



}






  
  


  
