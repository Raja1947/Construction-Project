var button = document.getElementById("nav-btn");
var bigWrapper = document.querySelector(".info-big-wrapper");
var leftWrapper = document.querySelector(".info-left-wrapper");
var button2=document.getElementById('getBtn2');
button.addEventListener("click", () => {
  bigWrapper.style.display = "block";
  bigWrapper.style.opacity = 1;
  leftWrapper.style.transform = "translateX(0)";
  leftWrapper.style.transition="ease-in 0.5s"
});
button2.addEventListener('click', ()=>{
    leftWrapper.style.transform = "translateX(0)";
  leftWrapper.style.transition="ease-in 0.5s"
})


var forCross = document.querySelector(".for-cross");
forCross.addEventListener("click", () => {
  bigWrapper.style.display = "none";
  bigWrapper.style.opacity = 0;
  leftWrapper.style.transform = "translate(100%)";
});

var menuBtn = document.getElementById("menu-btn");
var navBar = document.querySelector(".navbar");
var crossBtn = document.querySelector(".cross-img");
menuBtn.addEventListener("click", () => {
  menuBtn.style.display = "none";
  crossBtn.style.display = "block";
  crossBtn.style.transition="ease-in 0.9s"
  navBar.style.transform = "translateX(0)";
  navBar.style.transition="ease-in 0.5s"
});

crossBtn.addEventListener('click', ()=>{
    crossBtn.style.display = "none";
    menuBtn.style.display = "flex";
    
    navBar.style.transform = "translate(100%)";
})
