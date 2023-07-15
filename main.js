
let nav = document.getElementById("nav-4")
let home=document.getElementById("home1")
let black = document.getElementById("text-black")
let iconToggle=document.getElementById("black")
let about1=document.getElementById("about1")
let a1= document.getElementsByClassName("a-color")[0];
let a2 = document.getElementsByClassName("a-color")[1];
let a3 = document.getElementsByClassName("a-color")[2];
let a4 = document.getElementsByClassName("a-color")[3];
let a5 = document.getElementsByClassName("a-color")[4];
let a6 = document.getElementsByClassName("a-color")[5];
let a7 = document.getElementsByClassName("a-color")[6];

window.onscroll = function () {
  if (scrollY >= 500) {
    nav.classList.add("bg-nav1")
    black.classList.add("black")
    a1.classList.add("black")
    a2.classList.add("black")
    a3.classList.add("black")
    a4.classList.add("black")
    a5.classList.add("black")
    a6.classList.add("black")
    a7.classList.add("black")
    iconToggle.classList.add("black")
    home.classList.add("black-underline")
  } else {
    nav.classList.remove("bg-nav1")
    black.classList.remove("black")
    a1.classList.remove("black")
    a2.classList.remove("black")
    a3.classList.remove("black")
    a4.classList.remove("black")
    a5.classList.remove("black")
    a6.classList.remove("black")
    a7.classList.remove("black")
    iconToggle.classList.remove("black")
    home.classList.remove("black-underline")
   
  }
}



