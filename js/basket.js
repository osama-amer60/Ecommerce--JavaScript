//....................................................................
//control size of table in responsive cases
let table = document.getElementById("table")
if(window.innerWidth <=680){
    table.classList.remove("w-100")
}
window.addEventListener("resize",function(){
    if(window.innerWidth <=680){
        table.classList.remove("w-100")
    }else{
        table.classList.add("w-100")
    }
})

//....................................................
//display cart items in window
let totalHesap = 0;
let cartItems = JSON.parse(localStorage.getItem("cartItems"));
let tbody = document.getElementById("tbody")

function displayCartItems(){
    let cartona="";
    for (let i = 0; i < cartItems.length; i++) {
        totalHesap += cartItems[i].itemPrice * cartItems[i].itemQuantity
        cartona+=`    
        <tr>
            <td><i role="button" class="fa-sharp fa-solid fa-square-xmark fa-xl main" onclick="deleteCartItem(${[i]})"  ></i></td>
            <td>${cartItems[i].itemId}</td>
            <td> <img src="${cartItems[i].itemImg}" alt=""> </td>
            <td>${cartItems[i].itemTitle}</td>
            <td>${cartItems[i].itemPrice} $</td>
            <td> ${cartItems[i].itemQuantity}</td>
            <td>${Number((cartItems[i].itemPrice * cartItems[i].itemQuantity).toFixed(2))} $</td>
        </tr>`  
    }
  
        tbody.innerHTML= cartona
}
displayCartItems()

//......................................................
//calc total
function getTotal(){
    let subTotal = document.getElementById("subTotal")
    let taxes = document.getElementById("taxes")
    let total = document.getElementById("total")
    
    let limitSubTotalDecimalNum = Number(totalHesap.toFixed(2))
    subTotal.innerHTML = limitSubTotalDecimalNum + " $"
    
    let getTaxes = Number((limitSubTotalDecimalNum * 0.03).toFixed(2))
    let limitTotalDecimalNum = (limitSubTotalDecimalNum + getTaxes).toFixed(2)
    total.innerHTML =  limitTotalDecimalNum + " $"
}
getTotal()


//.......................................................................................
// delete product from cart 

if (cartItems.length === 0) {
    console.log(cartItems.length)
    localStorage.setItem("cartItems" , null);
    location.reload()

}   
function deleteCartItem(index){
        cartItems.splice(index, 1);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        displayCartItems();
        location.reload()
}