let navBar = document.getElementById("navBar")
let logedInNavBar =document.getElementById("logedInNavBar")
let logOut = document.getElementById("logOut");

if (localStorage.getItem("userName") != null) {
  navBar.classList.add("d-none");
  logedInNavBar.classList.remove("d-none");
}

logOut.addEventListener("click", function () {
localStorage.clear()
});

import { products } from './products.js';

//....................................................................................................
//featured Product section
function showFeaturedProducts() {
  let featuredProduct = document.getElementById("featuredProduct");
  let cartona = "";
  for (let i = 0; i < products.length; i++) {
    cartona += `
        <div class="col" role="button">
            <div class="card p-2">
                <img src="${products[i].img}"  alt="...">
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
                    <span class="price">$${products[i].price}</span>
                    <div class="favorite-icon"><i class="fa-regular fa-heart fa-lg"></i></div> 
                    <div class="basket-icon"><i class="fa-solid fa-cart-shopping fa-lg"></i></div> 
                </div>
            </div>
        </div>`;
  }
  featuredProduct.innerHTML = cartona;
}
showFeaturedProducts();


