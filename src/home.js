import Logo from "./logo.png";

export default function component() {
  let content = document.querySelector(".content");
  const element = document.createElement("div");
  element.classList.add("home");

  // add image to existing div
  const myLogo = new Image();
  myLogo.src = Logo;
  myLogo.classList.add("homePhoto");
  element.appendChild(myLogo);

  //homepage title
  const title = document.createElement("h1");
  title.textContent = "Welcome to our cafe!";
  element.appendChild(title);

  //short welcome
  const welcome = document.createElement("p");
  welcome.textContent =
    "Our meals are made fresh daily and we are always happy to cater to the community! Please reach out for more info.";
  element.appendChild(welcome);

  content.appendChild(element);
}
