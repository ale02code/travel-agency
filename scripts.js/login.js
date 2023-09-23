"use strict"

const Login = document.querySelector(".login-text");
const BackLogin = document.querySelector(".back-login");
const WindowLogin = document.querySelector(".content_window-login-off");

Login.addEventListener("click", e => {
  WindowLogin.classList.replace("content_window-login-off", "content_window-login-on");
});

BackLogin.addEventListener("click", e => {
  WindowLogin.classList.replace("content_window-login-on", "content_window-login-off");
});