//index.js

//import CSS and JS modules
import "./style.css";
import homeInfo from "./home.js";
import aboutInfo from "./about.js";
import menuInfo from "./menu";

//creates div for tab navigation
function createTabs() {
  const tabs = document.createElement("header");
  tabs.classList.add("tabs");
  const home = document.createElement("span");
  home.textContent = "Home";
  home.id = "home";
  tabs.appendChild(home);
  const about = document.createElement("span");
  about.textContent = "About";
  about.id = "about";
  tabs.appendChild(about);
  const menu = document.createElement("span");
  menu.textContent = "Menu";
  menu.id = "menu";
  tabs.appendChild(menu);
  return tabs;
}
document.body.appendChild(createTabs());

//create main .content div for page propogation
function component() {
  const element = document.createElement("div");
  element.classList.add("content");
  return element;
}
document.body.appendChild(component());

//modules attached to .content div
homeInfo();
aboutInfo();
menuInfo();

//pull DOM elements and create navigation by altering CSS style
function navigation() {
  const home = document.querySelector(".home");
  const about = document.querySelector(".about");
  const menu = document.querySelector(".menu");
  const homeBtn = document.querySelector("#home");
  const aboutBtn = document.querySelector("#about");
  const menuBtn = document.querySelector("#menu");
  homeBtn.addEventListener("click", () => {
    home.style.display = "block";
    about.style.display = "none";
    menu.style.display = "none";
  });
  aboutBtn.addEventListener("click", () => {
    home.style.display = "none";
    about.style.display = "block";
    menu.style.display = "none";
  });
  menuBtn.addEventListener("click", () => {
    home.style.display = "none";
    about.style.display = "none";
    menu.style.display = "block";
  });
}
navigation();
