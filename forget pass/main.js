let mail = document.querySelector("#mail");
let next = document.querySelector(".continue");
let alert_div = document.querySelector(".alert");
mail.addEventListener("focus" ,()=>{
    mail.placeholder = "";
})
mail.addEventListener("blur" ,()=>{
    mail.placeholder = "nick@acme.com";
})

next.addEventListener("click" , ()=>{
    if(mail.value != ""){
        if(window.localStorage.email && window.localStorage.password){
            if(mail.value == window.localStorage.email){
                next.href = "../reset pass/main.html";
            }else{
                alert_div.style.display = "block";
                setTimeout(()=>{
                    alert_div.style.display = "none";
                },2000)
            }
        }
    }else{
        alert("you have to write your Email")
    }
})


