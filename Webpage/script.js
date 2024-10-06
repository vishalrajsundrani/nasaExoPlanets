let moon=document.getElementById("moon");
let text=document.getElementById("text");
let train=document.getElementById("train");
let desert_moon=document.getElementById("desert-moon");
let man=document.getElementById("desert-man");

window.addEventListener("scroll",()=>{
    let value= window.scrollY;
    moon.style.top=value*0.45+"px";
    text.style.top= 80+value*-0.2+'%';
    train.style.left= value*1.5+"px";
    desert_moon.style.top=value*0.2+"px";
    man.style.left=value*0.3+"px";
})