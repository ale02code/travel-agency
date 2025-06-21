"use strict"

const openMenuIcon = document.getElementById("open-navbar");
const closeMenuIcon = document.getElementById("close-navbar");
const menu = document.getElementById("menu");
const containerLogo = document.getElementById("container-logo");
const itemNavClick = document.querySelectorAll('.nav__menu-item-a');
const containerNav = document.querySelector('.header__nav-container');
const nav = document.querySelector('.nav');

let isMobile = () => window.innerWidth <= 1020;

const openMenu = () => {
  containerNav.style.transition = '0s'
  menu.style.display = "flex";
  closeMenuIcon.style.display = "block"
  openMenuIcon.style.display = "none";
  containerLogo.style.display = "none"
  nav.style.justifyContent = "center";
}

const closeMenu = () => {
  menu.style.display = "none";
  openMenuIcon.style.display = "block";
  closeMenuIcon.style.display = "none";
  containerLogo.style.display = "flex"
  nav.style.justifyContent = "space-between";
}

openMenuIcon.addEventListener("click", function (e) {
  openMenu();
})

closeMenuIcon.addEventListener("click", function (e) {
  closeMenu();
})

if (isMobile()) {
  itemNavClick.forEach(item => {
    item.addEventListener('click', function () {
      closeMenu();
    })
  })
}

window.addEventListener('resize', function () {
  if (isMobile()) {
    closeMenu();
  }
})