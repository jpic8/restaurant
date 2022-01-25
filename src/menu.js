import Rolls from "./rolls.jpg";

export default function menuInfo() {
  let content = document.querySelector(".content");
  const element = document.createElement("div");
  element.classList.add("menu");

  //page photo
  const menuPhoto = new Image();
  menuPhoto.src = Rolls;
  menuPhoto.classList.add("menuPhoto");
  element.appendChild(menuPhoto);

  //menu
  const menu = [
    `THIS WEEK'S MENU`,
    `Tuesday: Ham and Cheese Philly`,
    `Wednesday: Southwest Sandwich`,
    `Thursday: Sauerkraut & Weenies`,
    `Friday: Mexican`,
    `Saturday: Meatloaf, Steak Fingers, or Rocky Mountain Oysters`,
    `Sunday: Fried Chicken & Pork Chops`,
  ];
  let ul = document.createElement("ul");
  for (let i = 0; i < menu.length; i++) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(menu[i]));
    ul.appendChild(li);
  }
  element.appendChild(ul);

  //place items in DOM .content div
  content.appendChild(element);
}
