

let toggle = document.getElementById("primary-education");
let display = document.getElementById("primary-ee");

toggle.addEventListener("click",() =>{
    if(display.classList.contains("primary")){
        display.classList.replace("primary","primary-display");
    }
    else{
        display.classList.replace("primary-display","primary");
    }
})


let undergradToggle = document.getElementById("toggleundergrad");
let display2 = document.getElementById("undergraduate");

undergradToggle.addEventListener("click",() =>{
    if(display2.classList.contains("undergraduate")){
        display2.classList.replace("undergraduate","undergraduate-year");
    }
    else{
        display2.classList.replace("undergraduate-year","undergraduate");
    }
})