let navbtn = document.getElementById("navbtn")
let closeSmallNav = document.getElementById("closeSmallNav")
let smallNav = document.getElementById("smallNav")
let navlist =document.getElementById("navlist")



navbtn.addEventListener("click",function(){
    smallNav.style.right = "0"

})
closeSmallNav.addEventListener("click",function(){
    smallNav.style.right = "-250"
})

window.addEventListener("resize", function(){
    if (window.innerWidth <= 768) {
        navlist.classList.add("d-none")
        navbtn.classList.remove("d-none")
    }else{
        navlist.classList.remove("d-none")
        navbtn.classList.add("d-none")

    }
})