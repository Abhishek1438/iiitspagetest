const heading = document.querySelector("h1");
const fullform = document.querySelectorAll("span");

heading.addEventListener("mouseover", ()=>{
    fullform.forEach((element) =>{
        element.classList.add("display_span");
    });
});


heading.addEventListener("mouseout", ()=>{
    fullform.forEach((element) =>{
        element.classList.remove("display_span");
    });
});