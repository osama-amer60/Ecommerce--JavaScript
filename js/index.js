//get all product from local storge
let allProducts = JSON.parse(localStorage.getItem("allProducts"))
// console.log(allProducts)

//.................................................................................
// show features icon section
function showFeatures() {
    let feature = document.getElementById("feature");
    let featureDes = [
      "Free Shppping",
      "Online Order",
      "Save Money",
      "Promotions",
      "Happy Sell",
      "F24/7 Support",
    ];
    let cartona = "";
    for (let i = 0; i < featureDes.length; i++) {
      cartona += `
           <div class="col">
           <div class="p-3 border shadow  text-center">
             <img class="mb-2 w-100" src="assets/img/features/f${
               i + 1
             }.png" alt="">            
             <div class="bg-color${i + 1}">${featureDes[i]}</div>
           </div>
         </div>
           `;
    }
    // console.log(cartona)
    feature.innerHTML = cartona;
  }
  showFeatures();

//....................................................................................................
//show featured Product section
function showFeaturedProducts(arr) {
  let featuredProduct = document.getElementById("featuredProduct");
  let cartona = "";
  for (let i = 0; i < 4; i++) {
    cartona += `
    <div class="col" id="cartContainer" role="button">
        <div class="card p-2"  onclick="getProductDetails(${[i]})">
            <img src="${arr[i].image}"  alt="...">
            <div class="card-body">
                <p class="card-text mb-1">${arr[i].category}</p>
                <h5 class="card-title">${arr[i].title}</h5>
                <div class="mb-2">
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star "></i>
                  <i class="fa-solid fa-star "></i>
                </div>
                <span class="price">$${arr[i].price}</span>
                </div>
            </div>
        <div class="favorite-icon"><i class="fa-regular fa-heart fa-lg" onclick="getFavoriteItem(${i})"></i></div> 
    </div>`;
  }
  featuredProduct.innerHTML = cartona;
}
showFeaturedProducts(allProducts);

//..........................................................................
// get more details about product which user chooesed
function getProductDetails(index) {
    if(localStorage.getItem("userName") != null){
      let productDetails = allProducts[index]
      // console.log(allProducts[index]);
      localStorage.setItem("productDetails",JSON.stringify(productDetails))
      location.href = "productDetails.html"
    }else{
      location.href = "signIn.html"
    } 
}

//..................................................................................................
//new arrivals section
function showNewArrivalsProducts(arr) {
    let newArrivals = document.getElementById("newArrivals");
    let cartona = "";
    for (let i =  allProducts.length -4; i < allProducts.length; i++) {
      cartona += `
      <div class="col" id="cartContainer" role="button">
        <div class="card p-2"  onclick="getProductDetails(${[i]})">
            <img src="${arr[i].image}"  alt="...">
            <div class="card-body">
                <p class="card-text mb-1">${arr[i].category}</p>
                <h5 class="card-title">${arr[i].title}</h5>
                <div class="mb-2">
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star checked"></i>
                  <i class="fa-solid fa-star "></i>
                  <i class="fa-solid fa-star "></i>
                </div>
                <span class="price">$${arr[i].price}</span>
            </div>
          </div>
        <div class="favorite-icon"><i class="fa-regular fa-heart fa-lg" onclick="getFavoriteItem(${i})"></i></div> 
      </div>`;
    }
    newArrivals.innerHTML = cartona;
  }
  showNewArrivalsProducts(allProducts);

//................................................................................
// get favorite item 
let favoriteItemsArray = [];
function getFavoriteItem(index){  
  let favoriteItems = allProducts[index]
  let getFavoriteItems = JSON.parse(localStorage.getItem("favoriteItems"))
  let favoriteItemsNum = document.getElementById("favoriteItemsNum")
    if (getFavoriteItems!= null) {       
      getFavoriteItems.push(favoriteItems)        
      localStorage.setItem("favoriteItems",JSON.stringify(getFavoriteItems))
      favoriteItemsNum.innerHTML= getFavoriteItems.length
  }else{        
    favoriteItemsArray.push(favoriteItems)
      localStorage.setItem("favoriteItems",JSON.stringify(favoriteItemsArray))
      favoriteItemsNum.classList.remove("d-none")
      favoriteItemsNum.innerHTML= favoriteItemsArray.length
  }
}



