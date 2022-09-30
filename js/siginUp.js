let userName = document.getElementById("userName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let repeatPassword = document.getElementById("repeatPassword");
let warningMsg = document.querySelector(".warningMsg");
let registrationBtn = document.getElementById("registrationBtn");


let storgeUserName = localStorage.getItem("userName")
let storgeEmail = localStorage.getItem("email")


registrationBtn.addEventListener("click", function () {
  if (
    userName.value == "" ||
    email.value == "" ||
    password.value == "" ||
    repeatPassword.value == ""
  ) {
    warningMsg.classList.remove("d-none");
    removeWarningMsg()
  }else if( password.value != repeatPassword.value){
    warningMsg.innerHTML= "*password is not the same"
    warningMsg.classList.remove("d-none");
    removeWarningMsg()

  }else if(userName.value == storgeUserName){
    warningMsg.innerHTML= "*user name is already exsist"
    warningMsg.classList.remove("d-none");
    removeWarningMsg()
  }else if(email.value == storgeEmail){
    warningMsg.innerHTML= "*email is already exsist"
    warningMsg.classList.remove("d-none");
    removeWarningMsg()
  }   else {
    warningMsg.classList.add("d-none");
    localStorage.setItem("userName",userName.value)
    localStorage.setItem("email",email.value)
    localStorage.setItem("password",password.value)
    localStorage.setItem("repeatPassword",repeatPassword.value)
    setTimeout(() => {
      window.location = "signIn.html";
    }, 1500);
  }
});

function removeWarningMsg(){
    setTimeout(() => {
        warningMsg.classList.add("d-none");
    }, 2000);
}
