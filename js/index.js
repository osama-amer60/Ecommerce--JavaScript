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

//..................................................................................................
//new arrivals section
function showNewArrivalsProducts() {
    let newArrivals = document.getElementById("newArrivals");
    let cartona = "";
    for (let i = 1; i < 9; i++) {
      cartona += `
          <div class="col" role="button" onclick="getsProductPage()">
              <div class="card p-2 ">
                  <img src="assets/img/products/n${i}.jpg"  class="" alt="...">
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
                      <span class="price">$78</span>
                      <div class="basket-icon"><i class="fa-solid fa-cart-shopping fa-lg"></i></div> 
                  </div>
              </div>
          </div>`;
    }
    newArrivals.innerHTML = cartona;
  }
  showNewArrivalsProducts();


