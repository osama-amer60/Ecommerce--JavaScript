//get all product from local storge
let allProducts = JSON.parse(localStorage.getItem("allProducts"))
// console.log(allProducts)

//....................................................................................................
//featured Product section
function showFeaturedProducts() {
    let featuredProduct = document.getElementById("featuredProduct");
    let cartona = "";
    for (let i = 0; i < allProducts.length; i++) {
      cartona += `
          <div class="col" role="button" onclick="getProductDetails(${i})">
              <div class="card p-2">
                  <img src="${allProducts[i].img}"  alt="...">
                  <div class="card-body">
                      <p class="card-text mb-1">adidas</p>
                      <h5 class="card-title">Cartoon Astronaut T-Shirts</h5>
                      <div class="mb-2">
                      <i class="fa-solid fa-star checked"></i>
                      <i class="fa-solid fa-star checked"></i>
                      <i class="fa-solid fa-star checked"></i>
                      <i class="fa-solid fa-star "></i>
                      <i class="fa-solid fa-star "></i>
                      </div>
                      <span class="price">$${allProducts[i].price}</span>
                      <div class="favorite-icon"><i class="fa-regular fa-heart fa-lg"></i></div> 
                  </div>
              </div>
          </div>`;
    }
    featuredProduct.innerHTML = cartona;
  }
  showFeaturedProducts();
  
//..........................................................................
// get more details about product which user chooesed
function getProductDetails(index) {
  if(localStorage.getItem("userName") != null){
    console.log(allProducts[index]);
    let productDetails = allProducts[index]
    localStorage.setItem("productDetails",JSON.stringify(productDetails))
    location.href = "productDetails.html"
  }else{
    location.href = "signIn.html"
  } 
}