

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

let form = document.getElementById("contactform");
let contact = document.getElementById("contact-me");
let sub = document.getElementById("cut");

contact.addEventListener("click",() =>{
    if(form.classList.contains("contactform")){
        form.classList.replace("contactform","contactform-real");
    }
})

sub.addEventListener("click",() =>{
    if(form.classList.contains("contactform-real")){
        form.classList.replace("contactform-real","contactform");
    }
})
