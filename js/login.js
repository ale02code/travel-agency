"use strict";

const LoginText = document.querySelector(".nav__menu-item--login");
const WindowLoginOFF = document.querySelector(".window-login-off");

// Utilidad para crear un elemento con clases y atributos opcionales
function createElement(tag, options = {}) {
  const el = document.createElement(tag);
  if (options.class) el.classList.add(...options.class.split(" "));
  if (options.text) el.textContent = options.text;
  if (options.src) el.src = options.src;
  if (options.htmlFor) el.setAttribute("for", options.htmlFor);
  if (options.type) el.setAttribute("type", options.type);
  if (options.required) el.required = true;
  if (options.href) el.href = options.href;
  return el;
}

// Crear estructura
const WindowLogin = createElement("div", { class: "window-login" });
const ContainerImageLogin = createElement("section", { class: "container_image-login" });
const ContentImageLogin = createElement("figure", { class: "content_image-login" });
const ImageLogin = createElement("img", { src: "imgs/place-5.webp" });

const Login = createElement("section", { class: "login" });
const ButtonBackLogin = createElement("div", { class: "button_back-login" });
const BackLogin = createElement("p", { class: "back-login", text: "Back" });
const BackLoginLogo = createElement("i", { class: "bi bi-arrow-bar-right" });

const ContainerTitleLogin = createElement("div", { class: "title-login" });
const TitleLogin = createElement("h2", { text: "Login" });

const FormLogin = createElement("form", { class: "form-login" });
const LabelEmail = createElement("label", { text: "Write your e-mail", htmlFor: "email" });
const InputEmail = createElement("input", { type: "email", required: true });

const LabelPassword = createElement("label", { text: "Write your password", htmlFor: "password" });
const InputPassword = createElement("input", { type: "password", required: true });

const RecoverPassword = createElement("div", { class: "recover-password" });
const RecoverPasswordLink = createElement("a", {
  href: "#home",
  text: "Have you forgotten your password?"
});
RecoverPasswordLink.style.textDecoration = "underline";

const SendForm = createElement("button", { class: "send-login", text: "Send" });
const BreakLine = createElement("div", { class: "break-line" });
const SocialLogin = createElement("div", { class: "social-login" });

const socialIcons = [
  { class: "bi bi-google" },
  { class: "bi bi-twitter-x" },
  { class: "bi bi-facebook" }
];

socialIcons.forEach(({ class: iconClass }) => {
  const iconContainer = createElement("div", { class: "social-icon" });
  const icon = createElement("i", { class: iconClass });
  iconContainer.appendChild(icon);
  SocialLogin.appendChild(iconContainer);
});

// Armar DOM
WindowLoginOFF.appendChild(WindowLogin);

ContainerImageLogin.appendChild(ContentImageLogin);
ContentImageLogin.appendChild(ImageLogin);
WindowLogin.appendChild(ContainerImageLogin);

ButtonBackLogin.appendChild(BackLogin);
BackLogin.appendChild(BackLoginLogo);
Login.appendChild(ButtonBackLogin);

ContainerTitleLogin.appendChild(TitleLogin);
Login.appendChild(ContainerTitleLogin);

FormLogin.appendChild(LabelEmail);
FormLogin.appendChild(InputEmail);
FormLogin.appendChild(LabelPassword);
FormLogin.appendChild(InputPassword);
RecoverPassword.appendChild(RecoverPasswordLink);
FormLogin.appendChild(RecoverPassword);
FormLogin.appendChild(SendForm);
Login.appendChild(FormLogin);

Login.appendChild(BreakLine);
Login.appendChild(SocialLogin);
WindowLogin.appendChild(Login);

// Eventos
LoginText.addEventListener("click", (e) => {
  e.preventDefault();
  WindowLoginOFF.classList.replace("window-login-off", "window-login-on");
});

BackLogin.addEventListener("click", () => {
  WindowLoginOFF.classList.replace("window-login-on", "window-login-off");
});
