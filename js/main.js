let hamburger=document.querySelector(".hamburger");
let navbar=document.querySelector(".sitenav__nav")
hamburger.onclick=function(){
    hamburger.classList.toggle("open");
    hamburger.classList.toggle("exit");
    navbar.classList.toggle("sitenav__nav--on");
    navbar.classList.toggle("sitenav__nav--off");
}