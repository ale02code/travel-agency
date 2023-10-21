"use strict"

const openMenu = document.getElementById("open-navbar");
const closeMenu = document.getElementById("close-navbar");
const menu = document.getElementById("menu");
const containerLogo = document.getElementById("container-logo");
const itemNavClick = document.querySelectorAll('.item-hover-close');
const containerNav = document.querySelector('.container-nav');

const openMenuFunct = () => {
  containerNav.style.transition = '0s'
  menu.style.display = "flex";
  closeMenu.style.display = "block"
  openMenu.style.display = "none";
  containerLogo.style.display = "none"
}

const closeMenuFunct = () => {
  menu.style.display = "none";
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
  containerLogo.style.display = "flex"
}

openMenu.addEventListener("click", function (e) {
  openMenuFunct()
})

closeMenu.addEventListener("click", function () {
  closeMenuFunct()
})

itemNavClick.forEach(item => {
  item.addEventListener('click', function () {
    closeMenuFunct()
  })
})