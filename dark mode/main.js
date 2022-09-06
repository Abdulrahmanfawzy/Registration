
let welcome = document.querySelector(".welcome");
let logout = document.querySelector(".logout i");

if(window.localStorage.background_body){
    if(window.localStorage.background_body == "bodyLight"){
        welcome.style.color = "var(--main-background)";
        logout.style.color = "var(--main-background)";
    }else{
        welcome.style.color = "#FFF";
        logout.style.color = "#FFF";
    }
}else{
    welcome.style.color = "var(--main-background)";
    logout.style.color = "var(--main-background)";
}


if(window.localStorage.username){
    let abbrev_username = window.localStorage.username;
    let x = abbrev_username.split(" ")[0];
    console.log(x);
    let newWords = `
        <h2>Welcome ${x}</h2>
        <section>in the dark mode</section>
    `
    welcome.innerHTML = newWords;
}else{
    window.location = "signin/main.html"
}


let container = document.querySelector(".container");
let image = document.querySelector(".image");
let image_img = document.querySelector(".image img");
let boxes = document.querySelectorAll(".box");
let body = document.querySelector("body");

if(window.localStorage.background_body){
    body.className = window.localStorage.background_body;
    boxes.forEach(element => {
        element.classList.add(window.localStorage.background);
    });
    if(window.localStorage.background_body == "bodyDark"){
        image.style.left = "50px";
        image_img.src = "dark mode/sun.png";
    }else{
        image.style.left = "5px";
        image_img.src = "dark mode/moon.png";
    }
}

container.addEventListener("click" , ()=>{
    if(image.style.left == "5px"){
        image.style.left = "50px";
        image_img.src = "dark mode/sun.png";
        body.className = "bodyDark";
        boxes.forEach((el)=>{
            el.classList.remove("dark")
        })
        boxes.forEach((el)=>{
            el.classList.add("light")
        })
        window.localStorage.setItem("background" , "light");
        window.localStorage.setItem("background_body" , "bodyDark");
        welcome.style.color = "#FFF";
        logout.style.color = "#FFF";
        
    }else{
        image.style.left = "5px";
        image_img.src = "dark mode/moon.png";
        body.className = "bodyLight";
        boxes.forEach((el)=>{
            el.classList.remove("light")
        })
        boxes.forEach((el)=>{
            el.classList.add("dark")
        })
        window.localStorage.setItem("background" , "dark");
        window.localStorage.setItem("background_body" , "bodyLight")
        welcome.style.color = "var(--main-background)";
        logout.style.color = "var(--main-background)";
        
    }
})

let out_link = document.querySelector(".out_link");
out_link.addEventListener("click" , ()=>{
    out_link.href = "signin/main.html"
})

