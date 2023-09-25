"use strict"

const openMenu = document.getElementById("open-navbar");
const closeMenu = document.getElementById("close-navbar");
const menu = document.getElementById("menu");
const containerLogo = document.getElementById("container-logo");

openMenu.addEventListener("click", Event => {
  menu.style.display = "flex";
  closeMenu.style.display = "block"
  openMenu.style.display = "none";
  containerLogo.style.display = "none"
})

closeMenu.addEventListener("click", Event => {
  menu.style.display = "none";
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
  containerLogo.style.display = "flex"
})