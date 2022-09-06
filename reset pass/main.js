let reset = document.querySelector(".Reset");
let show = document.querySelectorAll(".show img");
let alert = document.querySelector(".alert");
let pass1 = document.querySelector("#pass1");
let pass2 = document.querySelector("#pass2");

show.forEach((el)=>{
    el.addEventListener("click" , (e)=>{
        if(el.src.includes("show.png")){
            el.src = "../pic/hidden.png";
            let x = el.parentElement.nextElementSibling.nextElementSibling;
            x.type = "text"
        }else{
            el.src = "../pic/show.png";
            let x = el.parentElement.nextElementSibling.nextElementSibling;
            x.type = "password";
        }
    })
})

reset.addEventListener("click" , ()=>{
    if(pass1.value != "" && pass2.value != ""){
        if(pass1.value === pass2.value){
            window.localStorage.password = pass1.value;
            reset.href = "../signin/main.html";
        }else{
            alert.style.display = "block";
            setTimeout(()=>{
                alert.style.display = "none";
            },2000) 
        }
    }else{
        alert("you have to fill all fields");
    }
})
