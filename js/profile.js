let profile = document.getElementById("profile")
let history = document.getElementById("history")

let getUserNameData = localStorage.getItem("userName")
let getUserEmailData = localStorage.getItem("email")
let user_userName = document.getElementById("user-userName")
let user_email = document.getElementById("user-email")


user_userName.innerHTML =getUserNameData
user_email.innerHTML = getUserEmailData



function showProfileData(){
    let profileContent = document.getElementById("profileContent")
    let history = document.getElementById("history")
    let historyContent = document.getElementById("historyContent")

    historyContent.classList.add("d-none")
    profileContent.classList.remove("d-none")
    history.classList.remove("active")
    profile.classList.add("active")
}
profile.addEventListener("click",showProfileData)


function showHistoryData(){
    let profileContent = document.getElementById("profileContent")
    let historyContent = document.getElementById("historyContent")

    profileContent.classList.add("d-none")
    historyContent.classList.remove("d-none")
    profile.classList.remove("active")
    history.classList.add("active")
}
history.addEventListener("click",showHistoryData)
