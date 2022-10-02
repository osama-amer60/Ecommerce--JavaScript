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
function displayCartItems(){
    let tbody = document.getElementById("tbody")
    let cartona="";
        cartItems.map(item=>{
            totalHesap+=item.itemPrice * item.itemQuantity
            cartona+=`    
            <tr>
                <td><i class="fa-sharp fa-solid fa-square-xmark fa-xl main"></i></td>
                <td>${item.itemId}</td>
                <td> <img src="${item.itemImg}" alt=""> </td>
                <td>${item.itemTitle}</td>
                <td>${item.itemPrice} $</td>
                <td> ${item.itemQuantity}</td>
                <td>${item.itemPrice * item.itemQuantity} $</td>
            </tr>`    
        })    
        tbody.innerHTML= cartona
}
displayCartItems()

//......................................................
//calc total
let subTotal = document.getElementById("subTotal")
let taxes = document.getElementById("taxes")
let total = document.getElementById("total")
subTotal.innerHTML = totalHesap + " $"
total.innerHTML = totalHesap + (totalHesap *0.03) + " $"