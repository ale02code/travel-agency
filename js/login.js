"use strict";

const LoginText = document.querySelector(".login-text");
const WindowLoginOFF = document.querySelector(".content_window-login-off");

const WindowLogin = document.createElement('div');
WindowLogin.classList.add("window-login");

const ContainerImageLogin = document.createElement('section');
ContainerImageLogin.classList.add("container_image-login");

const ContentImageLogin = document.createElement('figure');
ContentImageLogin.classList.add("content_image-login");

const ImageLogin = document.createElement('img');
ImageLogin.src = "imgs/Place 5.webp";

const Login = document.createElement('section');
Login.classList.add("login");

const ButtonBackLogin = document.createElement('div');
ButtonBackLogin.classList.add("button_back-login");

const BackLogin = document.createElement('p');
BackLogin.textContent = "Back";
BackLogin.classList.add("back-login");

const BackLoginLogo = document.createElement('i');
BackLoginLogo.classList.add("bi", "bi-arrow-bar-right");

const ContainerTitleLogin = document.createElement('div');
ContainerTitleLogin.classList.add("title-login");

const TitleLogin = document.createElement('h2');
TitleLogin.textContent = "Login";

const FormLogin = document.createElement('form');
FormLogin.classList.add("form-login");

const LabelEmail = document.createElement('label');
LabelEmail.textContent = "Write your e-mail";
LabelEmail.setAttribute("for", "email");

const InputEmail = document.createElement('input');
InputEmail.setAttribute("type", "email");
InputEmail.setAttribute("required", "true");

const LabelPassword = document.createElement('label');
LabelPassword.textContent = "Write your password";
LabelPassword.setAttribute("for", "password");

const InputPassword = document.createElement('input');
InputPassword.setAttribute("type", "password");
InputPassword.setAttribute("required", "true");

const RecoverPassword = document.createElement('div');
RecoverPassword.classList.add("recover-password");

const RecoverPasswordLink = document.createElement('a');
RecoverPasswordLink.href = "#home";
RecoverPasswordLink.textContent = "Have you forgotten your password?";

const SendForm = document.createElement('button');
SendForm.textContent = "Send";
SendForm.classList.add("send-login");

const BreakLine = document.createElement('div');
BreakLine.classList.add("break-line");

const SocialLogin = document.createElement('div');
SocialLogin.classList.add("social-login");

const SocialIcon1 = document.createElement('div');
SocialIcon1.classList.add("social-icon");

const Icon1 = document.createElement('i');
Icon1.classList.add("bi", "bi-google");

const SocialIcon2 = document.createElement('div');
SocialIcon2.classList.add("social-icon");

const Icon2 = document.createElement('i');
Icon2.classList.add("bi", "bi-twitter-x");

const SocialIcon3 = document.createElement('div');
SocialIcon3.classList.add("social-icon");

const Icon3 = document.createElement('i');
Icon3.classList.add("bi", "bi-facebook");

WindowLoginOFF.appendChild(WindowLogin);

WindowLogin.appendChild(ContainerImageLogin);
ContainerImageLogin.appendChild(ContentImageLogin);
ContentImageLogin.appendChild(ImageLogin);

WindowLogin.appendChild(Login);
Login.appendChild(ButtonBackLogin);
ButtonBackLogin.appendChild(BackLogin);
BackLogin.appendChild(BackLoginLogo);

Login.appendChild(ContainerTitleLogin);
ContainerTitleLogin.appendChild(TitleLogin);

Login.appendChild(FormLogin);
FormLogin.appendChild(LabelEmail);
FormLogin.appendChild(InputEmail);
FormLogin.appendChild(LabelPassword);
FormLogin.appendChild(InputPassword);
FormLogin.appendChild(RecoverPassword);
RecoverPassword.appendChild(RecoverPasswordLink).style.textDecoration = "underline";
FormLogin.appendChild(SendForm);

Login.appendChild(BreakLine);

Login.appendChild(SocialLogin);
SocialLogin.appendChild(SocialIcon1);
SocialLogin.appendChild(SocialIcon2);
SocialLogin.appendChild(SocialIcon3);

SocialIcon1.appendChild(Icon1);
SocialIcon2.appendChild(Icon2);
SocialIcon3.appendChild(Icon3);

const LoginIdInput = document.getElementById("login-text-input");

LoginText.addEventListener("click", (e) => {
  e.preventDefault()
  WindowLoginOFF.classList.replace("content_window-login-off", "content_window-login-on");
});

BackLogin.addEventListener("click", () => {
  WindowLoginOFF.classList.replace("content_window-login-on", "content_window-login-off");
});
