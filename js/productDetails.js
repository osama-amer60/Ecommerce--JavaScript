//........................................................................................
//get the product's details which user chooesed from localstorge
let productDetails = JSON.parse(localStorage.getItem("productDetails"))
// console.log(productDetails)

//.......................................................................................
// display the produc's details
let productImg = document.getElementById("productImg")
let productName = document.getElementById("productName")
let productPrice = document.getElementById("productPrice")
let productDes = document.getElementById("productDetails")
function displayProductDetails(){
    productImg.src = productDetails.image
    productName.innerHTML = productDetails.title
    productPrice.innerHTML = productDetails.price 
    productDes.innerHTML = productDetails.description
}
displayProductDetails()

//..............................................................................
// add to cart function
let addToCartBtn = document.getElementById("addToCartBtn")
addToCartBtn.addEventListener("click",addToCart)
function addToCart(){
    let sizes = document.getElementById("sizes")
    let quantity = document.getElementById("quantity")    
    //get cart item from local storge
    let getCartItems = JSON.parse(localStorage.getItem("cartItems"))
    let baskeItemsNum = document.getElementById("baskeItemsNum")
    let cartItems = []
    if (quantity.value < 1) {quantity.value = 1 }
    let productOrder = {
        itemId : productDetails.id,
        itemImg:productDetails.image,
        itemTitle:productDetails.title,
        itemPrice:productDetails.price,
        itemSize:sizes.value,
        itemQuantity: quantity.value,
        itemDes: productDetails.description
    }

    if (getCartItems!= null) {       
        getCartItems.push(productOrder)        
        localStorage.setItem("cartItems",JSON.stringify(getCartItems))
        baskeItemsNum.innerHTML= getCartItems.length
        location.href = "basket.html"
    }else{        
        cartItems.push(productOrder)
        localStorage.setItem("cartItems",JSON.stringify(cartItems))
        baskeItemsNum.classList.remove("d-none")
        baskeItemsNum.innerHTML= cartItems.length
        location.href = "basket.html"
    }
}