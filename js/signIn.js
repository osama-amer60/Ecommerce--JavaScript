let userName = document.getElementById("userName");
let password = document.getElementById("password");
let warningMsg = document.querySelector(".warningMsg");
let logInBtn = document.getElementById("logInBtn")
let storgeUserName = localStorage.getItem("userName")
let storgePassword = localStorage.getItem("password")


//....................................................................
// login Function
function logIn(){
  if (
    userName.value == "" ||
    password.value == ""
  ) {
    warningMsg.classList.remove("d-none");
    removeWarningMsg()
  }else if (userName.value != storgeUserName) {
    warningMsg.innerHTML = "*incorrect user name"
    warningMsg.classList.remove("d-none");
    removeWarningMsg()
  }else if(password.value != storgePassword){
    warningMsg.innerHTML = "*incorrect password"
    warningMsg.classList.remove("d-none");
    removeWarningMsg()
  }else{
    console.log(userName.value);
    console.log(password.value);

    setTimeout(() => {
      window.location = "index.html";
    }, 1500);
  }
}
logInBtn.addEventListener("click",logIn)

//.........................................................................
// remove warning msg after some time
function removeWarningMsg(){
    setTimeout(() => {
        warningMsg.classList.add("d-none");
    }, 2000);
}