if(localStorage.username && localStorage.email && localStorage.password){
    // window.location = "../signin/index.html";
    // console.log(window.localStorage.getItem("username"));
    // console.log(window.localStorage.getItem("email"));
    // console.log(window.localStorage.getItem("password"));
}

function pass_work(){
    let inpt = document.querySelectorAll(".inpt_div input");
    let labels = document.querySelectorAll(".inpt_div label");
    let show = document.querySelector(".show img");
    let Password = document.querySelector("#password");
    let bar1 = document.querySelector(".bar1");
    let bar3 = document.querySelector(".bar3");
    let create_btn = document.querySelector("#create_btn");

    inpt.forEach((el)=>{
        el.addEventListener("focus" , (e)=>{
            el.previousElementSibling.style.cssText = "top: -43%; left: 30px; color: #FFF"
        })
        el.addEventListener("blur" , ()=>{
            if(el.value == ""){
                el.previousElementSibling.style.cssText = "top: 26%; left: 45px"
            }
        })
    })

    show.addEventListener("click" , ()=>{
        if(show.src.includes("hidden.png")){
            show.src = "../pic/show.png";
            Password.type = "text";
        }else{
            show.src = "../pic/hidden.png";
            Password.type = "password";
        }
    })

    Password.oninput = ()=>{
        if(Password.value.length >= 8){
            bar1.style.background = "#000";
        }else{
            bar1.style.background = "#fff";
        }

        if(Password.value.includes("_") || Password.value.includes("*") || Password.value.includes("$") || Password.value.includes("-")){
            bar3.style.background = "#000";
        }else{
            bar3.style.background = "#fff";
        }
    }
}
pass_work();


let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let create_btn = document.querySelector("#create_btn");

create_btn.addEventListener("click" , ()=>{
    if(username.value != "" && email.value != "" && password.value != ""){
        window.localStorage.setItem("username" , username.value);
        window.localStorage.setItem("email" , email.value);
        window.localStorage.setItem("password" , password.value);
        create_btn.href = "../signin/main.html";
    }else{
        alert("you have to fill all fields");
    }
})