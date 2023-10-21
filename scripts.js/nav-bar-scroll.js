"use strict"

let mainLocation = window.scrollY;
let nav = document.querySelector(".container-nav");
let efectNavbar = document.querySelector(".show-menu-file");
const menu = document.getElementById('menu');
let menuOpen = menu.style.display = 'flex';

window.addEventListener("scroll", function () {
  let currentLocation = window.scrollY;

  if (mainLocation >= currentLocation) {
    nav.style.top = "0px"
    nav.style.transition = "top .5s"
  } else {
    nav.style.top = "-80px"
    nav.style.transition = "top 1s"
  }

  mainLocation = currentLocation;
})