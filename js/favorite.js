
let favoriteIems = JSON.parse(localStorage.getItem("favoriteItems"))

if (favoriteIems != null) {
    function showFavoriteProducts(arr) {
        let favoriteItems = document.getElementById("favoriteItems")
        let cartona = "";
        for (let i = 0; i < arr.length; i++) {
          cartona += `
              <div class="col" id="cartContainer" role="button">
                  <div class="card p-2" onclick="getProductDetails(${i})">
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
                  <div class="favorite-icon"><i class="fa fa-heart fa-lg" onclick="deleteItem(${i})"></i></div>
              </div>`;
        }
        favoriteItems.innerHTML = cartona;
      }
      showFavoriteProducts(favoriteIems);
}

//..........................................................................
// get more details about product which user chooesed
function getProductDetails(index) {
    if(localStorage.getItem("userName") != null){
      let productDetails = favoriteIems[index]
      localStorage.setItem("productDetails",JSON.stringify(productDetails))
      location.href = "productDetails.html"
    }else{
      location.href = "signIn.html"
  } 
}

//..............................................................................
// delete item from favorite page
function deleteItem(index){
  let favoriteItemsNum = document.getElementById("favoriteItemsNum")
  favoriteIems.splice(index,1)
  localStorage.setItem("favoriteItems",JSON.stringify(favoriteIems))
  showFavoriteProducts(favoriteIems);
  favoriteItemsNum.innerHTML= favoriteIems.length
  if (favoriteIems.length === 0) {
    localStorage.setItem("favoriteItems" , null);
    location.reload()
  
  } 
}