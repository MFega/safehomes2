const hamburger = document.querySelector("#btn");
const close = document.querySelector("#cancel");
const slider = document.querySelector(".nav-bar");

hamburger.addEventListener("click",function(){
hamburger.getElementsByClassName.display = "none",
close.style.display = "block";
slider.style.display = "flex";
});

close.addEventListener("click",function(){
close.style.display = "none";
hamburger.style.display = "block";
slider.style.display = "none";
})