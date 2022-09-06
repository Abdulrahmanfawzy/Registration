let mail = document.querySelector("#mail");
let password = document.querySelector("#password");
let sign_link = document.querySelector(".sign_link a");

sign_link.addEventListener("click" , ()=>{
    if(mail.value != "" && password.value != ""){
        if(window.localStorage.email && window.localStorage.password){
            if(mail.value == window.localStorage.email && password.value == localStorage.password){
                sign_link.href = "../index.html";
            }else{
                alert("Email or password is wrong!... if you don't have an account , you should click on create an account");
            }
        }
    }else{
        alert("you have to fill all fields");
    }
})

