

// fetch api and  save all products in local storge
fetch('https://fakestoreapi.com/products')
  .then(res=>res.json())
  .then(json=>
    localStorage.setItem("allProducts",JSON.stringify(json)))


//....................................................................................
// navigate btween login navbar and logout navbar
let LocalStorgeUserName = localStorage.getItem("userName")
if ( LocalStorgeUserName!= null) {
  let navBar = document.getElementById("navBar");
  let logedInNavBar = document.getElementById("logedInNavBar");
  let userNavIcon = document.getElementById("userNavIcon")
  userNavIcon.innerHTML = userNavIcon.innerHTML +" "+ LocalStorgeUserName 
  navBar.classList.add("d-none");
  logedInNavBar.classList.remove("d-none");
}
    
//...................................................
//logout 
let logOut = document.getElementById("logOut");
logOut.addEventListener("click", function () {
  localStorage.clear();
});

//..............................................................
//show number of items in card on navbar
if (JSON.parse(localStorage.getItem("cartItems"))!= null){
  let baskeItemsNum = document.getElementById("baskeItemsNum")
  let cartItemsLength = JSON.parse(localStorage.getItem("cartItems")).length
  baskeItemsNum.classList.remove("d-none")
  baskeItemsNum.innerHTML= cartItemsLength
}

//..............................................................
//show number of items in favorite on navbar
if (JSON.parse(localStorage.getItem("favoriteItems"))!= null){
  let favoriteItems = document.getElementById("favoriteItemsNum")
  let favoriteItemsLength = JSON.parse(localStorage.getItem("favoriteItems")).length
  favoriteItems.classList.remove("d-none")
  favoriteItems.innerHTML= favoriteItemsLength
}

