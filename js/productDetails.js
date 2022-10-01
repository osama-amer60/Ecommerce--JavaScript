let product= localStorage.getItem("productDetails")
let productDetails = JSON.parse(product)

let productImg = document.getElementById("productImg")
let productName = document.getElementById("productName")
let productPrice = document.getElementById("productPrice")
let sizes = document.getElementById("sizes")
let quantity = document.getElementById("quantity")
let productDes = document.getElementById("productDetails")
let addToCartBtn = document.getElementById("addToCartBtn")
let baskeItemsNum = document.getElementById("baskeItemsNum")


console.log(productDetails)

productImg.src = productDetails.img
productName.innerHTML = productDetails.name
productPrice.innerHTML = productDetails.price + " $"
productDes.innerHTML = productDetails.description



let cartItems = []


let count=1
addToCartBtn.addEventListener("click",function(){
    let productOrder = {
        itemId : productDetails.id,
        itemImg:productImg.src,
        itemTitle:productName.innerHTML,
        itemPrice:productPrice.innerHTML,
        itemSize:sizes.value,
        itemQuantity: quantity.value,
        itemDes: productDes.innerHTML
    }
    cartItems=[...cartItems, productOrder]
    console.log(cartItems)
    localStorage.setItem("cartItems",JSON.stringify(cartItems))
    baskeItemsNum.classList.remove("d-none")
    baskeItemsNum.innerHTML= count++
})



