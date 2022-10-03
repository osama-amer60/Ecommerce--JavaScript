//get all product from local storge
let allProducts = JSON.parse(localStorage.getItem("allProducts"))
console.log(allProducts)

//,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
// filter options
function filterCategory(){
  let categories = document.getElementById("categories")
  categories.style.borderColor = "#088178"
    if (categories.value === "allcategories") {
      showFeaturedProducts(allProducts)
      }else{
      fetch(`https://fakestoreapi.com/products/category/${categories.value}`)
      .then(res=>res.json())
      .then(json=>showFeaturedProducts(json))
    }
}
categories.addEventListener("change",filterCategory)


//....................................................................................................
//featured Product section
let filterdArray = [ ]
function showFeaturedProducts(arr) {
  filterdArray = arr
  let featuredProduct = document.getElementById("featuredProduct");
  let cartona = "";
  for (let i = 0; i < arr.length; i++) {
    cartona += `
        <div class="col" role="button" onclick="getProductDetails(${[i]})">
            <div class="card p-2">
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
                    <div class="favorite-icon"><i class="fa-regular fa-heart fa-lg"></i></div> 
                </div>
            </div>
        </div>`;
  }
  featuredProduct.innerHTML = cartona;
}
showFeaturedProducts(allProducts);

//..........................................................................
// get more details about product which user chooesed
function getProductDetails(index) {
  if(localStorage.getItem("userName") != null){
    let productDetails = filterdArray[index]
    localStorage.setItem("productDetails",JSON.stringify(productDetails))
    location.href = "productDetails.html"
  }else{
    location.href = "signIn.html"
  } 
}
