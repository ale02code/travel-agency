"use strict"

const openMenu = document.getElementById("open-navbar");
const closeMenu = document.getElementById("close-navbar");
const menu = document.getElementById("menu");
const containerLogo = document.getElementById("container-logo");
const itemNavClick = document.querySelectorAll('.nav__menu-item');
const containerNav = document.querySelector('.header__nav-container');
const nav = document.querySelector('.nav');

const openMenuFunct = () => {
  containerNav.style.transition = '0s'
  menu.style.display = "flex";
  closeMenu.style.display = "block"
  openMenu.style.display = "none";
  containerLogo.style.display = "none"
  nav.style.justifyContent = "center";
}

const closeMenuFunct = () => {
  menu.style.display = "none";
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
  containerLogo.style.display = "flex"
}

openMenu.addEventListener("click", function (e) {
  openMenuFunct();
})

closeMenu.addEventListener("click", function (e) {
  closeMenuFunct();
})

// check width of screen
let width = window.innerWidth;

if (width <= 1020) {
  itemNavClick.forEach(item => {
    item.addEventListener('click', function () {
      closeMenuFunct()
    })
  })
}